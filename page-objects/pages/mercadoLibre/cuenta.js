import {Selector, t} from 'testcafe' 

class cuenta{
    constructor(){

        this.tengoCuenta = Selector('a:nth-of-type(2) > .andes-button__content')
        this.email = Selector('#user_id')
        this.continuar = Selector('button > .andes-button__content')
        this.mensajeEmail = Selector("div[class='ui-form__message']").withText('Revisa tu e-mail o usuario.')
        this.textoClave = Selector('h2[class="center-card__title"]').withText('Ahora, tu clave')
        this.password = Selector('input#password')


    }

    async emailErroneo(email){

        await t
            .click(this.tengoCuenta)
            .typeText(this.email, email)
            .click(this.continuar)
            .expect(this.mensajeEmail.innerText)
            .contains('Revisa tu e-mail o usuario.')
    }

    async passwordErroneo(email, password){

        await t
            .click(this.tengoCuenta)
            .typeText(this.email, email)
            .click(this.continuar)
            .expect(this.textoClave.innerText)
            .contains('Ahora, tu clave')
            .typeText(this.password, password)
    }
}


export default cuenta