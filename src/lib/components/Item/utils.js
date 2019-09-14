export function getItemPositioningStyles(drawFromCenter, drawFromRight, leftOffset, rightOffset, width) {
    if (drawFromCenter) {
        return {
            left: -width / 2
        };
    }

    return {
        [drawFromRight ? 'right' : 'left']: drawFromRight ? `${rightOffset}px` : `${leftOffset}px`
    };
}
