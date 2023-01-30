import joi from "joi";

const ufs = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

export const purchaseSchema = joi.object({
    name: joi.string().required().messages(
        {"string.base": "Você precisa estar logado para fazer compras!"}),
    street: joi.string().required(),
    number: joi.number().integer().positive().required().messages(
        {"number.base": "O número da residência precisa ser um número!"},
        {"number.integer": "O número da residência precisa ser um número inteiro!"}),
    city: joi.string().required().messages(
        {"string.base": "O nome da cidade deve ser um texto válido!"},
    ),
    uf: joi.string().required().min(2).max(2).valid(...ufs).messages(
        {"any.only": "Digite uma Unidade Federativa válida!"}
    ),
    cep: joi.string().required().pattern(new RegExp('[0-9]{5}-[0-9]{3}')).messages(
        {"string.pattern.base": "Digite o CEP no formato indicado (XXXXX-XXX)"},
    ),
    paymentMethod: joi.string().valid("credit-card", "PIX").required().messages(
        {"any.only": "Escolha um método de pagamento!"}
    ),
    items: joi.array().required().min(1).messages(
        {"array.min": "Você precisa ter escolhido pelo menos 1 item para comprar"}
    )
}).messages(
    
    {"string.empty": "Todos os campos devem estar preenchidos"}
    );
