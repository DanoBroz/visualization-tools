export const limitArray = (limit: number, arr?: any[]) =>
    arr?.slice(arr.length - limit, arr.length);
