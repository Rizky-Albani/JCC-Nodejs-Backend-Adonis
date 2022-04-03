import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RoleOwner {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let role = auth.user?.role
    
    if(role == "owner"){
      await next()
    }else{
      return response.badRequest({message: 'Hanya owner venue yang dapat mengakses ini!'})
    }
  }
}
