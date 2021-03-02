import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createCn } from 'bem-react-classname';

import usePortal from '../../../common-hooks/text';

import './modal-window-wrapper.css';

type ModalWindowProps = {
    className?: string;
    children: React.ReactNode;
};

const ModalWindow = React.memo(({children, className}: ModalWindowProps) => {
    const cn = createCn('modal-window-wrapper', className);
    const newModalWrapper = usePortal('root-modal');

    const ModelWithContent = (
        <div className={cn()}>
            <div className={cn('modal')}>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(ModelWithContent, newModalWrapper);
});

export default ModalWindow;
