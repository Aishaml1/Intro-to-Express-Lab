
const flowers = [
    {type: 'Roses', love: true, _id:345765},
    {type: 'Orchids', love: false, _id:309283},
    {type: 'Aster',     love: false, _id:345671},
    {type: 'Dahlias', love: false, _id:123456}
]

const find = (conditions, callback) => {
    // see if this works, if not, execute the code in the catch block
    try {
      // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
        throw new TypeError('Please pass in an object')
}
      // If the object is empty, return all the flowers
    if (Object.keys(conditions).length === 0) return callback(null, flowers)
      // deal with errors
    } catch (error) {
    console.log(error)
    callback(error, [])
    }
}

    export { 
    find
    }
