/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/',async ({ response }) => {
    response.redirect().toPath('/docs/')
})

Route.group(() => {
    Route.get('/venues', 'VenuesController.index').middleware(['auth', 'verify', 'owner'])
    Route.get('/venues/:id', 'VenuesController.show').middleware(['auth', 'verify', 'owner'])
    Route.post('/venues', 'VenuesController.store').middleware(['auth', 'verify', 'owner'])
    Route.put('/venues/:id', 'VenuesController.update').middleware(['auth', 'verify', 'owner'])
    Route.delete('/venues/:id', 'VenuesController.destroy').middleware(['auth', 'verify', 'owner'])

    Route.resource('venues.fields', 'FieldsController').middleware({'*': ['auth', 'verify', 'owner']})

    Route.resource('fields.bookings', 'BookingsController').middleware({'*': ['auth', 'verify', 'user']})

    Route.get('/fields/:id', 'FieldsController.show').middleware(['auth', 'verify', 'user'])
    Route.get('/bookings', 'BookingsController.index').middleware(['auth', 'verify', 'user'])
    Route.get('/bookings/:id', 'BookingsController.show').middleware(['auth', 'verify', 'user'])
    Route.put('/bookings/:id/join', 'BookingsController.join').middleware(['auth', 'verify', 'user'])
    Route.put('/bookings/:id/unjoin', 'BookingsController.unjoin').middleware(['auth', 'verify', 'user'])

    Route.post('/register', 'AuthController.register').as('auth.register')
    Route.post('/login', 'AuthController.login').as('auth.login')
    Route.put('/logout', 'AuthController.logout').as('auth.logout')
    Route.post('/otp-verification', 'AuthController.otp_verification').as('auth.otp_verification')

    Route.get('/schedule', 'BookingsController.schedule').middleware(['auth', 'verify', 'user'])

}).prefix('/api/v1')