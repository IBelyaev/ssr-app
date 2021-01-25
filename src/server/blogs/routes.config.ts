import { Express } from 'express';
import BlogController from './controllers/blog.controller';

export default function (app: Express) {
    app.post('/blog', [
        BlogController.insert
    ])

    app.get('/blogs', [
        BlogController.list
    ])
};
