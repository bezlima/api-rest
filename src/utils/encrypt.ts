const bcrypt = require('bcrypt')

////////////
const password = 'senha123' // A senha que você deseja criptografar
///////////////

bcrypt.hash(password, 10, (err: Error | null, hash: string) => {
    if (err) {
        console.error(err)
        return
    }
    // 'hash' contém a senha criptografada
    console.log('Senha criptografada:', hash)
})

///////
const storedHash = '...' // A senha criptografada armazenada no banco de dados
const loginPassword = 'senha123' // A senha fornecida durante o processo de login
////////////

bcrypt.compare(loginPassword, storedHash, (err: Error | null, result: string) => {
    if (err) {
        console.error(err)
        return
    }
    if (result) {
        console.log('Senha correta. Acesso permitido.')
    } else {
        console.log('Senha incorreta. Acesso negado.')
    }
})
