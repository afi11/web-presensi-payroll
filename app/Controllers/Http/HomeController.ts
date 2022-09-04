import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {

    public async index({view, request}: HttpContextContract) {
        return view.render('dashboard/index')
    }

}
