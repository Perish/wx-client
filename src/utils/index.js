// 获取token
export const getToken = () => localStorage.getItem('_ilike_cook');
// 是否登陆
export const isAuth = () => getToken() !== null
// 移除token
export const removeToken = () => localStorage.removeItem('_ilike_cook');