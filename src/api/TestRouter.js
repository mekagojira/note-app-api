import TestActions from '../actions/test'
import Router from './RouterProtoype'

class TestRouter extends Router {
    init() {
        this.router.get('/', this.handle(TestActions.Test))
        this.router.get('/error', this.handle(TestActions.TestError))
    }
}

export default TestRouter
