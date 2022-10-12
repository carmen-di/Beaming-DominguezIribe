const ordenGenerada = (nombre, apellido, email, telefono, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;