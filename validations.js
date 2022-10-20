import {body} from 'express-validator'

export const loginValidation = [
    body('email', 'Email is wrong').isEmail(),
    body('password', 'Password length must be longer then 5').isLength({min: 5}),
]

export const registerValidation = [
    body('email', 'Email is wrong').isEmail(),
    body('password', 'Password length must be longer then 5').isLength({min: 5}),
    body('fullName', 'Name must be longer then 3').isLength({min: 3}),
    body('avatarURL', 'Please put URL in field').optional().isURL(),
]

export const postCreateValidation = [
    body('title', 'Enter title').isLength({min: 3}).isString(),
    body('text', 'Enter text').isLength({min: 5}).isString(),
    body('tags', 'Name must be longer then 3').optional().isString(),
    body('imageUrl', 'Please put URL in field').optional().isURL(),
]