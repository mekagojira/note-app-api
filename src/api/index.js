import { version } from '../../package.json'
import { Router } from 'express'
import TestRouter from './TestRouter'
import UserRouter from './UserRouter'

export default ({ config, db }) => {
    let api = Router()

    const testRouter = new TestRouter()
    api.use('/test', testRouter.getRouter())

    const userRouter = new UserRouter()
    api.use('/', userRouter.getRouter())

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({ version })
    })

    return api
}
