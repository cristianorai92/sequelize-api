module.exports = {
    fromEntity: (usuario) => {
        return {
            id: usuario.id,
            email: usuario.email,
            role: usuario.roll,
            emailVerificado: usuario.emailVerificado
        }
    }
}