const bcrypt = require('bcrypt')

export async function hashPassword(password: string) {
    try {
        const hash = await bcrypt.hash(password, 10)
        return hash
    } catch (error) {
        throw error
    }
}

export async function comparePassword(loginPassword: string, storedHash: string) {
    try {
        const result = await bcrypt.compare(loginPassword, storedHash)
        return result
    } catch (error) {
        throw error
    }
}
