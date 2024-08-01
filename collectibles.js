let importar = (marcaFigura) =>{
    const fs = require('fs')
    nomArchivo = '';

    nomArchivo =(marcaFigura === 'Hot Toys')? 'figuras1':
                (marcaFigura === 'Bandai')? 'figuras2':
                (marcaFigura === 'Star Wars')? 'figuras3': undefined

    const dato = `./datos/${nomArchivo}.json`
    const figuraJSON = fs.readFileSync(dato,'utf-8')
    const figuraParse = JSON.parse(figuraJSON)
return figuraParse
}
//console.log(importar('Star Wars'))

module.exports = importar