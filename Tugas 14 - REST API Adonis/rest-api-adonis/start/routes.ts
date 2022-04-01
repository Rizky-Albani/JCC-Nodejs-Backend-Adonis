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

Route.get('/venues', 'VenuesController.index').middleware('auth')
Route.get('/venues/:id', 'VenuesController.show').middleware('auth')
Route.post('/venues', 'VenuesController.store').middleware('auth')
Route.put('/venues/:id', 'VenuesController.update').middleware('auth')
Route.delete('/venues/:id', 'VenuesController.destroy').middleware('auth')

Route.resource('venues.fields', 'FieldsController').middleware({'*': "auth"})

Route.resource('fields.bookings', 'BookingsController').middleware({'*': "auth"})

Route.get('/fields/:id', 'FieldsController.show').middleware('auth')
Route.get('/bookings/:id', 'BookingsController.show').middleware('auth')


Route.post('/register', 'AuthController.register').as('auth.register')
Route.post('/login', 'AuthController.login').as('auth.login')
//new commit