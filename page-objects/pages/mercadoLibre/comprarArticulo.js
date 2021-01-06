import {Selector, t} from 'testcafe' 

class comprarArticulo{
    constructor(){

        this.botonComprar = Selector("[formaction='https://www.mercadolibre.com.mx/gz/checkout/buy']")
        this.textoCuenta = Selector('h2').withText('¡Hola! Para comprar, ingresa a tu cuenta')
        this.soyNuevo = Selector ('a#registration-link > .andes-button__content')

    }

    async realizarCompra(){

        await t
            .click(this.botonComprar)
            .expect(this.textoCuenta.innerText)
            .contains('¡Hola! Para comprar, ingresa a tu cuenta')

    }
}

export default comprarArticulo