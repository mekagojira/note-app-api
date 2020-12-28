export const isString = data => {
    return typeof data === 'string'
}

export const parseString = (data, trim = false) => {
    const result = data + ''

    return trim ? result.trim() : result
}
