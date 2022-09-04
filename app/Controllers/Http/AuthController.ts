import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class AuthController {

    public async register({  request, auth, response  }: HttpContextContract) {
        const validationSchema = schema.create({
            username: schema.string({trim: true}, [
                rules.unique({table: "users", column: "username"}),
            ]),
            email: schema.string({trim: true}, [
                rules.email(),
                rules.unique({table: "users", column: "email"}),
            ]),
            password: schema.string({ trim: true }, [rules.confirmed()]),
        });

        const userDetails = await request.validate({
            schema: validationSchema
        });

        const user = new User();
        user.username = userDetails.username;
        user.email = userDetails.email;
        user.role = 2;
        user.isActive = 1;
        user.password = userDetails.password;
        await user.save();
        await auth.login(user);
        response.redirect("/");
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        await auth.attempt(email, password);

        response.redirect("/");
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout();
        response.redirect("/login")
    }

}
