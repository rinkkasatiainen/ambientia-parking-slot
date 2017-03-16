export function reserve(name) {
  return {
    type: 'RESERVE_PARKINGSLOT',
    payload : {name}
  };
}
