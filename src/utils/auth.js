export function setToken(toekn){
    localStorage.setItem("token",token)
}
export function getToken(token){
    return localStorage.getItem("token")
}
export function removeToken(token){
    localStorage.removeItem("token")
}