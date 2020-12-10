import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import index from'./routes/index';
import users from'./routes/users';
import products from'./routes/products';

let _server
const server = {
    start(){
        var app = express();

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        app.use('/', index);
        app.use('/users', users);
        app.use('/products', products)

        app.set('port', '3000');

        _server = app.listen('3000', () => {
            console.log("Listen in 3000")
        })
    },
    stop(){
        _server.clase()
    }
}

export default server

if(!module.parent){
    server.start()
}
