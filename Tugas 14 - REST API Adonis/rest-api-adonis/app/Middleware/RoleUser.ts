import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RoleUser {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let role = auth.user?.role
    
    if(role == "user"){
      await next()
    }else{
      response.badRequest({message: 'Hanya user!'})
    }
  }
}
