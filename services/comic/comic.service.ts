export const getComicsByPage = async (
    offset?: number, limit?: number
): Promise<any> => {
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);

    const response = await fetch(`/api/comics?${params.toString() || ""}`);
    return await response.json();
};

export const getComicsById = async (comicId: number): Promise<any> => {
    const response = await fetch(`/api/comics/${comicId}`);

    return await response.json();
};