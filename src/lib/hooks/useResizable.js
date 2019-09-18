import { useEffect, useRef, useState, useCallback } from 'react';
import { getMomentWithOffset } from '../components/Item/utils';

function resizeRight(initialX, initialWidth, wrapper, e) {
    wrapper.current.style.width = `${initialWidth + (e.pageX - initialX)}px`;
}

export default function useResizable(item, columnWidth, resizableElement, rightResizer, leftResizer, onResizeFinished) {
    const resizeRightFunctionRef = useRef();
    const resizeLeftFunctionRef = useRef();
    const leftOffset = useRef();

    const stopResize = () => {
        onResizeFinished(item.id, getMomentWithOffset(item.startTime, columnWidth, leftOffset.current));
        window.removeEventListener('mousemove', resizeRightFunctionRef.current);
        window.removeEventListener('mousemove', resizeLeftFunctionRef.current);
    };

    const resizeLeft = (initialX, initialWidth, initialLeft, wrapper, e) => {
        const offset = e.pageX - initialX;
        const left = initialLeft + offset;
        const width = initialWidth - offset;
        leftOffset.current = offset;
        wrapper.current.style.left = `${left}px`;
        wrapper.current.style.width = `${width}px`;
    };

    useEffect(() => {
        rightResizer.current.addEventListener('mousedown', (e) => {
            const initialX = e.pageX;
            const initialWidth = resizableElement.current.getBoundingClientRect().width;
            resizeRightFunctionRef.current = resizeRight.bind(null, initialX, initialWidth, resizableElement);
            window.addEventListener('mousemove', resizeRightFunctionRef.current);
            window.addEventListener('mouseup', stopResize);
        });

        leftResizer.current.addEventListener('mousedown', (e) => {
            // clear all html selections that can make resizing funky
            window.getSelection().removeAllRanges();

            const initialX = e.pageX;
            const initialLeft = Number(resizableElement.current.style.left.replace('px', ''));
            const initialWidth = resizableElement.current.getBoundingClientRect().width;
            resizeLeftFunctionRef.current = resizeLeft.bind(null, initialX, initialWidth, initialLeft, resizableElement);
            window.addEventListener('mousemove', resizeLeftFunctionRef.current);
            window.addEventListener('mouseup', stopResize);
        });
    }, []);
}
