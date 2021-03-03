import express from 'express'

import BlogModels, { Blog } from '../models/blog.model';

const BlogController = {
    create: (req: express.Request, res: express.Response) => {
        const date = new Date().getTime();
        const blogData = { ...req.body, date };

        BlogModels
            .createBlog(blogData)
            .then((result) => {
                res.status(200).send({id: result._id});
            });
    },
    list: (_req: express.Request, res: express.Response) => {    
        BlogModels
            .list()
            .then((result) => {
                res.status(200).send(result);
            });
    },
    delete: (req: express.Request, res: express.Response) => {    
        const { blog_id } = req.params;

        BlogModels
            .delete(blog_id)
            .then((result) => {
                res.status(200).send('success');
            });
    },
    getBlog: (req: express.Request, res: express.Response) => {    
        const { blog_id } = req.query;

        BlogModels
            .getBlog(blog_id as string)
            .then((result) => {
                res.status(200).send(result);
            }).catch((error) => {
                res.status(400).send(error);
            });
    }
};

export default BlogController;
