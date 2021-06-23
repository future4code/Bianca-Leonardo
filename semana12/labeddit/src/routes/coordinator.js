export const goToFeed = (history) => {
    history.push('/')
}
export const goToLogin = (history) => {
    history.push('/login')
}
export const goToSignUp = (history) => {
    history.push('/signup')
}
export const goToPostDetail = (history, id) => {
    history.push(`/post/${id}`)
}