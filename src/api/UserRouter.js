import Router from './RouterProtoype'
import CreateUser from '../actions/user/CreateUser'

export default class UserRouter extends Router {
    init() {
        this.router.post('/user/register', this.handle(CreateUser))
    }
}
