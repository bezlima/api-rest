import z from 'zod'

exports.loginSchemaRequest = z
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
    })
    .strict()
