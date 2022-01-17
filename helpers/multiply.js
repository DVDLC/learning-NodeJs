const fs = require('fs')

// 1ra forma de resolverlo con "promesas"

/* const createFile = (base = 5) => {
    return new Promise((resolve, reject) => {
        let salida = ''

        console.clear()
        console.log('===================')
        console.log(`    Tabla del ${base}  `)
        console.log('===================\n')
    
        for(let i = 1; i <= 10; i++){
            salida += (`${base} x ${i}: ${base * i}\n`)
        }
        console.log(salida)
    
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        resolve('The file has been saved!')
    })
} */

// 2da Forma de resolvero con "async"

const createFile = async(base = 5, list, until) => {
   
    try{
        let salida = ''
        return new Promise((res, rej) => {
            
            for(let i = 1; i <= until; i++){
                salida += (`${base} x ${i}: ${base * i}\n`)
            }

            if(list){
                console.log('===================')
                console.log(` Tabla del ${base} `)
                console.log('===================\n')
                console.log(salida)
            }

            fs.writeFileSync(`./app/tabla-${base}.txt`, salida)
                res('The file has been saved!')
        })

    } catch(err) {
        throw new err
    }

}


module.exports = createFile
