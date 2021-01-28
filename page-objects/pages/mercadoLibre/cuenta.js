import {Selector, t} from 'testcafe' 

class cuenta{
    constructor(){

        this.tengoCuenta = Selector('a:nth-of-type(2) > .andes-button__content')
        this.email = Selector('.andes-form-control__control')
        this.continuar = Selector('button > .andes-button__content')
        this.mensajeEmail = Selector("div[class='ui-form__message']").withText('Revisa tu e-mail o usuario.')


    }

    async cuentaErronea(email){

        await t
            .click(this.tengoCuenta)
            .typeText(this.email, email, {paste: true, replace: true })
            .click(this.continuar)
            .expect(this.mensajeEmail.innerText)
            .contains('Revisa tu e-mail o usuario.')

    }
}


export default cuenta