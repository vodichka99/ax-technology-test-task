export async function getComments(postId: number, page: number, perPage: number) {
    return fetch(`http://localhost:3001/comments?_page=${page}&_per_page=${perPage}&postId=${postId}`)
}