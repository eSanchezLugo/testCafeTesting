import {Selector} from 'testcafe'
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

//prettier-ignore
fixture      `Olvide mi contraseña`
    .page     `http://zero.webappsecurity.com/index.html`


test("Enviar nueva contraseña a su correo", async t =>{

    // Get selectors
    
    const LinkToPassword = Selector('a').withText('Forgot your password ?')
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText

    //Actions

    await t.click(navbar.signInButton)
    await t.click(LinkToPassword)
    await t.typeText(emailInput, 'email@random.com', {paste: true})
    await t.pressKey('enter')

    //Assertions

    await t.expect(message).contains('email@random.com')
    await t.expect(emailInput.exists).notOk()

})