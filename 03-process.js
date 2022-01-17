const createFile = require('./helpers/multiply')
const argv = require('./config/yargs')

// main()
console.clear()

createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(fileName, 'created!'))
    .catch(err => console.log(err))