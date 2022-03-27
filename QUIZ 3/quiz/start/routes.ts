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

Route.get('/genres', 'GenresController.index').as('genres.index')
Route.get('/genres/:id', 'GenresController.show').as('genres.show')
Route.post('/genres', 'GenresController.store').as('genres.store')
Route.put('/genres/:id', 'GenresController.update').as('genres.update')
Route.delete('/genres/:id', 'GenresController.destroy').as('genres.destroy')

Route.get('/movies', 'MoviesController.index').as('movies.index')
Route.get('/movies/:id', 'MoviesController.show').as('movies.show')
Route.post('/movies', 'MoviesController.store').as('movies.store')
Route.put('/movies/:id', 'MoviesController.update').as('movies.update')
Route.delete('/movies/:id', 'MoviesController.destroy').as('movies.destroy')