export function reserve() {
    return {
        type : 'RESERVE_SLOT',
        payload : {}
    }
}

export function login(email, password) {
    return {
        type : 'LOGIN',
        payload : {email, password}
    }
}