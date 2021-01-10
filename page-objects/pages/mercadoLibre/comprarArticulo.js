import {Selector, t} from 'testcafe' 

class comprarArticulo{
    constructor(){

        this.botonComprar = Selector("[formaction='https://www.mercadolibre.com.mx/gz/checkout/buy']")
        this.textoCuenta = Selector('h2').withText('¡Hola! Para comprar, ingresa a tu cuenta')
        this.soyNuevo = Selector ('a#registration-link > .andes-button__content')
        this.Nombre = Selector ('#firstName')
        this.Apellido = Selector('#lastName')
        this.Email = Selector('#email')
        this.Clave = Selector('#password')
        this.ActivarCheck = Selector('#tyc_checkbox')


    }

    async realizarCompra(){

        await t
            .click(this.botonComprar)
            .expect(this.textoCuenta.innerText)
            .contains('¡Hola! Para comprar, ingresa a tu cuenta')

    }
    async registroParaComprar( nombre, apellido, email, clave){

        await t
            .typeText(this.Nombre, nombre)
            .typeText(this.Apellido, apellido)
            .typeText(this.Email, email)
            .typeText(this.Clave, clave)
            .click(this.ActivarCheck)

    }

}

export default comprarArticulo