import Navbar from '../page-objects/components/Navbar'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const  loginPage = new  LoginPage()
const forgottenPasswordPage = new  ForgottenPasswordPage()

//prettier-ignore
fixture      `Olvide mi contraseña`
    .page     `http://zero.webappsecurity.com/index.html`


test("Enviar nueva contraseña a su correo", async t =>{


    await t.click(navbar.signInButton)
    await t.click(loginPage.forgottenPasswordLink)
    await t.typeText(forgottenPasswordPage.emailInput, 'email@random.com', {
        paste: true,
        replace : true
    })
    await t.pressKey('enter')

    await t.expect(forgottenPasswordPage.message.innerText)
    .contains('email@random.com')
    await t.expect(forgottenPasswordPage.emailInput.exists).notOk()

})