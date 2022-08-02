
const orderData = (name, lastName, email, address, cart, total) => {
    return {
        buyer: {
            name: name,
            lastName: lastName,
            email: email,
            address: address
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default orderData;