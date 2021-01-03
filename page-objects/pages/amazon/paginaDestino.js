import {Selector, t} from 'testcafe'

class paginaDestino {
    constructor(){
        this.cajaDeBusqueda = Selector('#twotabsearchtextbox')
        this.botonBuscar = Selector('#nav-search-submit-button')
        
        this.SeleccionarProducto = Selector('[alt="Funko Pop\! Rides\: Crash Team Racing - Crash Bandicoot"]')

    }

    async buscarProducto (buscarProducto){

        await t
        
            .typeText(this.cajaDeBusqueda, buscarProducto, {paste: true, replace: true })
            .click(this.botonBuscar)


    }
    
}

export default paginaDestino