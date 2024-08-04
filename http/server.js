import path from 'node:path';
// Library express for website
import express from 'express';
// Check speed res serv
import logger from 'morgan';

// Create error
import createError from 'http-errors';

// Routes
import mainRouter from './routes/main.js';
import helpRouter from './routes/help.js';
import phoneRouterId from './routes/phone.js'

const server = express()
// Config
server.set('views', path.resolve('./http/views/inc'))
server.set('view engine', 'ejs')

server.use(logger('dev'))
server.use(express.static(path.resolve('./http/public')))

server.use('/', mainRouter)
server.use('/',helpRouter)
server.use('/',phoneRouterId)



server.use((req, res, next) => {
    next(createError(404))
})

server.use('/help',(err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

export default server;