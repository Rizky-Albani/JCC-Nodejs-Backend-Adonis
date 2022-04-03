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

Route.group(() => {
    Route.get('/venues', 'VenuesController.index').middleware(['auth', 'verify'])
    Route.get('/venues/:id', 'VenuesController.show').middleware(['auth', 'verify'])
    Route.post('/venues', 'VenuesController.store').middleware(['auth', 'verify'])
    Route.put('/venues/:id', 'VenuesController.update').middleware(['auth', 'verify'])
    Route.delete('/venues/:id', 'VenuesController.destroy').middleware(['auth', 'verify'])

    Route.resource('venues.fields', 'FieldsController').middleware({'*': ['auth', 'verify']})

    Route.resource('fields.bookings', 'BookingsController').middleware({'*': ['auth', 'verify']})

    Route.get('/fields/:id', 'FieldsController.show').middleware(['auth', 'verify'])
    Route.get('/bookings/:id', 'BookingsController.show').middleware(['auth', 'verify'])
    Route.put('/bookings/:id/join', 'BookingsController.join').middleware(['auth', 'verify'])
    Route.put('/bookings/:id/unjoin', 'BookingsController.unjoin').middleware(['auth', 'verify'])

    Route.post('/register', 'AuthController.register').as('auth.register')
    Route.post('/login', 'AuthController.login').as('auth.login')
    Route.post('/otp-verification', 'AuthController.otp_verification').as('auth.otp_verification')
}).prefix('/api/v1')