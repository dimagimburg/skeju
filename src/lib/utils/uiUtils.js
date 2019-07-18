export function isChildVisibleHorizontallyInsideParent(parent, child) {
    if (!(parent && child)) return false;
    const childBoundingClientRect = child.getBoundingClientRect();
    const parentBoundingClientRect = parent.getBoundingClientRect();

    return childBoundingClientRect.left + childBoundingClientRect.width > parentBoundingClientRect.x
        && childBoundingClientRect.left + childBoundingClientRect.width < parentBoundingClientRect.x + parentBoundingClientRect.width + childBoundingClientRect.width;
}
