import {useEffect, useRef} from 'react';

function resizeRight(initialX, initialWidth, wrapper, e) {
    // clear all html selections that can make resizing funky
    window.getSelection().removeAllRanges();
    wrapper.current.style.width = `${initialWidth + (e.pageX - initialX)}px`;
}

function resizeLeft(initialX, initialWidth, initialLeft, wrapper, e) {
    // clear all html selections that can make resizing funky
    window.getSelection().removeAllRanges();

    const left = initialLeft + (e.pageX - initialX);
    const width = initialWidth - (e.pageX - initialX);
    wrapper.current.style.left = `${left}px`;
    wrapper.current.style.width = `${width}px`;
}

export default function useResizable(resizableElement, rightResizer, leftResizer) {
    const resizeRightFunctionRef = useRef();
    const resizeLeftFunctionRef = useRef();

    useEffect(() => {
        function stopResizeRight() {
            window.removeEventListener('mousemove', resizeRightFunctionRef.current);
            window.removeEventListener('mousemove', resizeLeftFunctionRef.current);
        }

        rightResizer.current.addEventListener('mousedown', (e) => {
            const initialX = e.pageX;
            const initialWidth = resizableElement.current.getBoundingClientRect().width;
            resizeRightFunctionRef.current = resizeRight.bind(null, initialX, initialWidth, resizableElement);
            window.addEventListener('mousemove', resizeRightFunctionRef.current);
            window.addEventListener('mouseup', stopResizeRight);
        });

        leftResizer.current.addEventListener('mousedown', (e) => {
            const initialX = e.pageX;
            const initialLeft = Number(resizableElement.current.style.left.replace('px', ''));
            const initialWidth = resizableElement.current.getBoundingClientRect().width;
            resizeLeftFunctionRef.current = resizeLeft.bind(null, initialX, initialWidth, initialLeft, resizableElement);
            window.addEventListener('mousemove', resizeLeftFunctionRef.current);
            window.addEventListener('mouseup', stopResizeRight);
        });
    }, []);
}
