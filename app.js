 const importar = require('./collectibles.js');

 const hotToys = importar('Hot Toys')
 const bandai = importar ('Bandai')
 const starWars = importar('Star Wars')

 //console.log(hotToys,bandai,starWars)

 const unifiedCollectibles = [...hotToys,...bandai,...starWars]
 //console.log(unifiedCollectibles)

 const collectibles = {
    figuras: unifiedCollectibles,
    listFigures:function(){
        this.figuras.forEach((figura,i)=>{
            console.log(`${i + 1} - ${figura.marca} - (Figura: ${figura.nombre}) /// (Precio:$${figura.precio}) /// (Cantidad:${figura.stock})`)
        })
    },
    figuresByBrand:function(marFigura){
        const figurasFilter = this.figuras.filter(({marca})=>{
            return marca.toLowerCase() === marFigura.toLowerCase()
        })
        return figurasFilter
    }
 }
 //collectibles.listFigures()
 //console.log(collectibles.figuresByBrand('Hot Toys'))