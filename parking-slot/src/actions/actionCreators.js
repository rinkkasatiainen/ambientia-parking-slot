export function reserve() {
    return {
        type: 'RESERVE',
        payload: {}
    }
}
export function login(email, password) {
    return {
	type: 'LOGIN',
	email, password
}
}

export function loggedIn(uid) {

console.log(uid)
    return {
	type: 'LOGGED_IN',
	uid
}
}
