import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createCn } from 'bem-react-classname';

import './modal-window.css';

function usePortal(id: string) {
    const rootElemRef = React.useRef(document.createElement('div'));
  
    useEffect(function setupElement() {
        const parentElem = document.querySelector(`#${id}`);
        parentElem?.appendChild(rootElemRef.current);

        return function removeElement() {
            rootElemRef.current.remove();
        };
    }, [id]);
  
    return rootElemRef.current;
}

const ModalWindow = React.memo(({children}) => {
    const cn = createCn('modal-window');
    const newModalWrapper = usePortal('root-modal');

    const ModelWithContent = (
        <div className={cn()}>
            <div className={cn('test')}>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(ModelWithContent, newModalWrapper);
});

export default ModalWindow;
