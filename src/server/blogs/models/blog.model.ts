import { Document, Schema } from 'mongoose';

import mongoose from '../../common/services/mongoose.service';

export interface Blog {
    title: string;
    description: string;
    date: number;
    author: string;
};

interface BlogBaseDocument extends Blog, Document {};

const blogSchema: Schema<BlogBaseDocument> = new Schema({
    title: String,
    description: String,
    date: Number,
    author: String,
    id: String,
}, {
    versionKey: false,
});

const BlogModel = mongoose.model('Blog', blogSchema);

const BlogModels = {
    createBlog: (userData: Blog) => {
        const user = new BlogModel(userData);

        return user.save();
    },
    list: () => {
        return new Promise((resolve, reject) => {
            BlogModel.find()
                .exec((err, users) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(users);
                    }
                })
        });
    },
    delete: (_id: string) => (
        new Promise((resolve, reject) => {
            BlogModel
                .find({ _id })
                .remove()
                .exec((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('success');
                    }
                })
        })
    ),
    getBlog: (_id: string) => {
        return new Promise((resolve, reject) => {
            BlogModel
                .find({ _id })
                .exec((err, user) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(user);
                    }
                })
        });
    },
};

export default BlogModels;
