import ActionPrototype from '../ActionPrototype'
import { isString, parseString } from '../../helpers/parser'
import User from '../../models/user.model'

export default class CreateUser extends ActionPrototype {
    checkUser = async user => {
        const { username } = user
        const query = {
            username,
        }

        const existed = await User.findOne(query)

        if (existed)
            return this.createError({
                message: 'User existed',
                code: this.code.USER_EXISTED,
            })

        return user
    }

    parseArgs = async args => {
        const result = {}
        const { username, password } = args

        if (!isString(username))
            return this.createError({
                message: 'Username should be a string',
                code: this.code.INVALID_PARAM_TYPE,
            })

        if (!isString(password))
            return this.createError({
                message: 'Password should be a string',
                code: this.code.INVALID_PARAM_TYPE,
            })

        result.username = parseString(username, true)
        result.password = parseString(password)

        if (!result.password)
            return this.createError({
                message: 'Password should be lengthful string',
                code: this.code.INVALID_PARAM_VALUE,
            })

        if (!result.username)
            return this.createError({
                message: 'Username should be a lengful string',
                code: this.code.INVALID_PARAM_VALUE,
            })

        return this.checkUser(result)
    }

    createUser = async user => {
        const newUser = await User.create(user)

        return newUser.toJSON()
    }

    process = async ({ body }) => {
        const args = await this.parseArgs(body)

        return this.createUser(args)
    }
}
