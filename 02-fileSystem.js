const createFile = require('./helpers/multiply')

// main()

createFile(base)
    .then(fileName => console.log(fileName, 'created!'))
    .catch(err => console.log(err))