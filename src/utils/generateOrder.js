
const orderData = (name, address, cart, total) => {
    return {
        buyer: {
            name: name,
            address: address
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default orderData;