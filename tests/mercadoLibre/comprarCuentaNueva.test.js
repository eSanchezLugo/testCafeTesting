import {ClientFunction} from 'testcafe'
import BuscarProducto from '../../page-objects/pages/mercadoLibre/buscarProducto'
import ComprarArticulo from  '../../page-objects/pages/mercadoLibre/comprarArticulo'

const buscarProducto = new BuscarProducto ()
const comprarArticulo = new ComprarArticulo ()


fixture     `Cuenta nueva`
    .page   `https://www.mercadolibre.com.mx/`

    .beforeEach( async t => {

        await t.maximizeWindow()

    })

    const scrollBy = ClientFunction((x, y) => {
        window.scrollBy(x, y);
    });

test ("Comprar un producto con cuenta nueva", async t =>{

    buscarProducto.buscarProducto('funko pop crash bandicoot')
    scrollBy(0, buscarProducto.seleccionarArticulo)
    await t 
        .click(buscarProducto.seleccionarArticulo)
        .expect(buscarProducto.tituloProducto.innerText).contains('Funko Pop Dr. Neo Cortex Crash Bandicoot Games Nuevo')
    comprarArticulo.realizarCompra()
    await t
        .click(comprarArticulo.soyNuevo)
    comprarArticulo.registroParaComprar('Eduardo', 'Sanchez', 'esanchezlugo.com', '$pruebaTestCafe23')
    await t.wait(20)




})



