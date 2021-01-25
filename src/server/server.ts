import path from 'path';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.dev.config';
import BlogsRoutesConfig from './blogs/routes.config';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8000;

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const JS_FILE = path.join(DIST_DIR, 'main.js');
const compiler = webpack(config);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});
app.use(bodyParser.json());

BlogsRoutesConfig(app);

if (IS_PRODUCTION) {
    app.use(express.static(path.join(__dirname)));

    app.get('/', (req, res) => {
        res.sendFile(HTML_FILE)
    });
} else {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
    
    app.use(webpackHotMiddleware(compiler));
    
    app.get('/', (_req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
    
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        })
    })
    
    app.get('/main.js', (req, res) => {
        res.sendFile(JS_FILE)
    });
}

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
});
