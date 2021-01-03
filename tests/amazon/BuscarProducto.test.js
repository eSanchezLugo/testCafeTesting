import {Selector} from 'testcafe'
import BuscarProducto from '../../page-objects/pages/amazon/paginaDestino'

const buscarProducto = new BuscarProducto ()

fixture     `Buscar producto`
    .page   `https://www.amazon.com.mx/`

test ("Buscar un producto", async t =>{

    await t.maximizeWindow()
    buscarProducto.buscarProducto('funko pop crash bandicoot')
    await t.click(buscarProducto.SeleccionarProducto)
    await t.wait(30)
    

})



