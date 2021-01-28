import {ClientFunction} from 'testcafe'
import BuscarProducto from '../../page-objects/pages/mercadoLibre/buscarProducto'
import ComprarArticulo from  '../../page-objects/pages/mercadoLibre/comprarArticulo'
import Cuenta from '../../page-objects/pages/mercadoLibre/cuenta'


const buscarProducto = new BuscarProducto ()
const comprarArticulo = new ComprarArticulo ()
const cuenta = new Cuenta()


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
    cuenta.cuentaErronea('esanchezlugo@gmail.com')
    await t.wait(20)

})



