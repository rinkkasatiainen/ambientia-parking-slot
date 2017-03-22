export function reserve() {
    console.log('reserve()')
    return {
        type: 'RESERVE',
        payload: {}
    }
}