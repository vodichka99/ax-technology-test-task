export async function getPosts(page: number, perPage: number, title?: string) {
    const titleQuery = title ? ("&q=" + title) : ""
    return fetch(`http://localhost:3001/posts?_page=${page}&_per_page=${perPage}` + titleQuery)
}

export async function getPost(id: number) {
    return fetch("http://localhost:3001/posts/" + id)
}