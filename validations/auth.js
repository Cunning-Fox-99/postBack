import {body} from 'express-validator'

export const registerValidation = [
    body('email', 'Email is wrong').isEmail(),
    body('password', 'Password length must be longer then 5').isLength({min: 5}),
    body('fullName', 'Name must be longer then 3').isLength({min: 3}),
    body('avatarURL', 'Please put URL in field').optional().isURL(),
]