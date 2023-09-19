const { z } = require('zod')

export const userSchemaRequest = z
    .object({
        email: z
            .string({
                required_error: 'Email inválido',
                invalid_type_error: 'Email inválido',
            })
            .email()
            .trim(),
        password: z
            .string({
                required_error: 'Senha inválida',
                invalid_type_error: 'Senha inválida',
            })
            .trim(),
        userName: z
            .string({
                required_error: 'Nome de usuário inválida',
                invalid_type_error: 'Nome de usuário inválida',
            })
            .trim(),
    })
    .strict()
