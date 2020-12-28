import { model } from 'mongoose'
import sharedAttributes from './_sharedAttributes'
import * as mongoose from 'mongoose'

export default function createModel(schema, name) {
    const createdSchema = {
        ...sharedAttributes,
        ...schema,
    }

    console.log(createdSchema)

    const _schema = new mongoose.Schema(createdSchema)

    return model(name, _schema, name)
}
