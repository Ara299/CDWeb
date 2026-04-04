import axiosClient from "./axiosClient";

const listCartItem = async (body) => {
    return await axiosClient.get('/cart/listCartItem', {
        headers: {
            Authorization: `Bearer ${body.token}`
        }
    });
}

const updateCartItem = async (body, token) => {
    return await axiosClient.post('/cart/updateItem', body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export { listCartItem, updateCartItem };