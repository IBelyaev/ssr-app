import React from 'react';
import { createCn } from 'bem-react-classname';
import { useForm, useField } from 'react-final-form-hooks';
import { Typography } from '@alfalab/core-components/typography';
import { CrossMIcon } from '@alfalab/icons-glyph';
import { Input } from '@alfalab/core-components-input';
import { Textarea } from '@alfalab/core-components-textarea';
import { Button } from '@alfalab/core-components-button';

import { Blog } from '../../../../server/blogs/models/blog.model';
import ModalWindow from '../modal-window-wrapper';

import './create-article-window.css';

type Props = {
    onClose: () => void;
    onSubmit: (arg: Blog) => void;
};

const validate = (values: any) => {
    const errors = {} as any;
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.description) {
      errors.description = 'Required'
    }

    if (!values.author) {
        errors.author = 'Required'
    }

    return errors
  }

const CreateArticleWindow = React.memo(({onClose, onSubmit}: Props) => {
    const cn = createCn('create-article-window');
    const { form, handleSubmit } = useForm({
        onSubmit,
        validate
    })

    const {input: titleInputProps, meta: titleMetaProps} = useField('title', form);
    const {input: descriptionInputProps, meta: descriptionMetaProps} = useField('description', form);
    const {input: authorInputProps, meta: authorMetaProps } = useField('author', form);

    return (
        <ModalWindow className={cn()}>
            <div className={cn('header')}>
                <Typography.Title tag='div' view='small'>
                    Пора создать что-то новое получается
                </Typography.Title>
                <CrossMIcon
                    onClick={onClose}
                    className={cn('icon')}    
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={cn('body')}>
                    <Input
                        {...titleInputProps}
                        error={titleMetaProps.touched && titleMetaProps.error}
                        className={cn('input')}
                        block={true}
                        label="Название статьи"
                    />
                    <Textarea
                        {...descriptionInputProps}
                        error={descriptionMetaProps.touched && descriptionMetaProps.error}
                        className={cn('input')}
                        block={true}
                        label="Вообще о чем она собственно статьи"
                    />
                    <Input
                        {...authorInputProps}
                        error={authorMetaProps.touched && authorMetaProps.error}
                        className={cn('input')}
                        block={true}
                        label="Автор статьи"
                    />
                </div>
                <div className={cn('footer')}>
                    <Button
                        className={cn('create-btn')}
                        view='primary'
                        size='s'
                        type="submit"
                    >
                        Создать статью
                    </Button>
                    <Button
                        size='s'
                        onClick={onClose}
                    >
                        Отмена
                    </Button>
                </div>
            </form>
        </ModalWindow>
    );
});

export default CreateArticleWindow;
