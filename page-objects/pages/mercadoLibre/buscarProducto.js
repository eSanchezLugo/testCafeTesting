import {Selector, t} from 'testcafe'


class buscarProducto {
    constructor(){
            this.cajaDeBusqueda = Selector("input[aria-label='Ingresa lo que quieras encontrar']")
            this.seleccionarArticulo = Selector("img[alt='Funko Pop Dr. Neo Cortex Crash Bandicoot Games Nuevo']")
            this.tituloProducto = Selector ('h1')
            .withText('Funko Pop Dr. Neo Cortex Crash Bandicoot Games Nuevo')
        

    }

    async buscarProducto (buscarProducto){

        await t 
            .typeText(this.cajaDeBusqueda, buscarProducto, {paste: true, replace: true })
            .pressKey('enter')

    }
    
}

export default buscarProducto