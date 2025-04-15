export const isActiveLink = (path: string, currentPath: string) => {
    if (path === "/" && currentPath === "/") {
        return true;
    }
    if (path !== "/" && currentPath.includes(path)) {
        return true;
    }
    return false;
}; 