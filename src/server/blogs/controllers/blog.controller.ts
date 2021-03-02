import express from 'express'

import BlogModels from '../models/blog.model';

const BlogController = {
    insert: (req: express.Request, res: express.Response) => {
        const date = new Date().getTime();
        const blogData = { ...req.body, date };

        BlogModels
            .createBlog(blogData)
            .then((result) => {
                res.status(201).send({id: result._id});
            });
    },
    list: (_req: express.Request, res: express.Response) => {    
        BlogModels
            .list()
            .then((result) => {
                res.status(200).send(result);
            });
    }
};

export default BlogController;
