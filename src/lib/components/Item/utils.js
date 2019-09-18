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

export function getMomentWithOffset(momentObject, dayWidth, offset) {
    const seconds = (offset / dayWidth) * 24 * 60 * 60;
    return momentObject.clone().add(seconds, 'seconds');
}
