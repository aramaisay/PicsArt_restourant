// questionable at least
export const cartSelector = (state) => [state[3], state[4]];
export const restourantSelector = (state) => state[0];
export const menuSelector = (state,resId) => state[1][resId-1];
export const kitchenTypeSelector = (state) => state[2];
