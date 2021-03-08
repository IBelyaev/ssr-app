import { Express } from 'express';
import BlogController from './controllers/blog.controller';

export default function (app: Express) {
    app.post('/blog', [
        BlogController.create
    ])

    app.get('/blogs', [
        BlogController.list
    ])

    app.delete('/blog/:blog_id', [
        BlogController.delete
    ])

    app.get('/blog', [
        BlogController.getBlog
    ])

    app.put('/blog/:blog_id', [
        BlogController.update
    ])
};
