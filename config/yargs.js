const { describe } = require('yargs')

const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'It is the base of multiplication.'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table in the console'
    })
    .option('u', {
        alias: 'until',
        type: 'string',
        default: 10,
        describe: 'Returns the limit of the multiplication'
    })
    .check( (yargs, option) => {
        if(isNaN(yargs.b)){
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv


module.exports = yargs