export const CART_QUANTITY_CHANGE = 'CART_QUANTITY_CHANGE';
export const CART_DELETE = 'CART_DELETE';
export const CART_ADD = 'CART_ADD';
export const CART_ORDER = 'CART_ORDER';
export const RES_ADD = 'RES_ADD';
export const DISHES_ADD = 'DISHES_ADD';
export const TYPES_ADD = 'TYPES_ADD';
export const CART_ADD_OBJ = (resId, itemId) => { return {type: CART_ADD, payload: {resId, itemId}} };
export const CART_DELETE_OBJ = (resId, itemId) => { return {type: CART_DELETE, payload: {resId, itemId}} };
export const CART_QUANTITY_OBJ = (resId, itemId, amount) => { return {type: CART_QUANTITY_CHANGE, payload: {resId, itemId, amount}} };
export const CART_ORDER_OBJ = () => { return {type: CART_ORDER} };
export const RES_ADD_OBJ = (data) => { return {type: RES_ADD, payload: {data}} };
export const DISHES_ADD_OBJ = (data) => { return {type: DISHES_ADD, payload: {data}} };
export const TYPES_ADD_OBJ = (data) => { return {type: TYPES_ADD, payload: {data}} };