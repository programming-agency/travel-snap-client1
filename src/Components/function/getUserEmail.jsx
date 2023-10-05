export const getUserEmail = async () => {
    const user = JSON.parse(await localStorage.getItem("user"))
    if (user.email) return user.email
    return null
}