import createModel from './_createModel'
import modelNames from './_modelsNames'

const UserSchema = {
        username: String,
        password: String,
    },
    User = createModel(UserSchema, modelNames.user)

export default User
