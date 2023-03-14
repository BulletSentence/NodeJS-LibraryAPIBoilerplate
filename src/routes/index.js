import express from 'express'
import books from './bookRoutes.js'
import authors from './authorsRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Hello')
    })
    
    app.use(
        express.json(),
        books,
        authors
    )
}

export default routes;