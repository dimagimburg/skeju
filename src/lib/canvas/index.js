export function getGridBackgroundCanvas(windowWidth, numberOfColumns, linesColor) {
    const canvas = document.createElement('canvas');
    const height = 10;
    const multiplier = 10;
    const ww = windowWidth * multiplier;
    const columnWidth = ww / numberOfColumns;
    const ctx = canvas.getContext('2d');

    canvas.width = ww;
    canvas.height = height;

    ctx.fillStyle = 'rgba(255,255,255,0)';
    ctx.fillRect(0, 0, ww, height);
    ctx.lineWidth = multiplier;
    ctx.strokeStyle = linesColor;

    for (let i = 1; i < numberOfColumns; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * columnWidth - 0.5 * multiplier, 0);
        ctx.lineTo(i * columnWidth - 0.5 * multiplier, height);
        ctx.stroke();
    }

    return canvas;
}

export function getGridBackgroundURL(windowWidth, numberOfColumns, linesColor) {
    return getGridBackgroundCanvas(windowWidth, numberOfColumns, linesColor).toDataURL('image/png', 1);
}
