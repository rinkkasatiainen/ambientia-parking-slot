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
