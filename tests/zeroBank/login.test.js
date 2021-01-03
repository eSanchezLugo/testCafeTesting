import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/zeroBank/LoginPage'
import AccountSummary from  '../../page-objects/pages/zeroBank/AccountSummary'

import percySnapshot from '@percy/testcafe'


const navbar = new Navbar()
const loginPage = new LoginPage()
const accountSummary = new AccountSummary()

// prettier-ignore
fixture      `Login Test`
    .page    `http://zero.webappsecurity.com/index.html`


    test('Usuario con credenciales invalidas', async t => {

        await t.click(navbar.signInButton)
        loginPage.loginToApp('invalid username', 'invalid password')
        loginPage.waitFor(4000)
        await percySnapshot(t, "Ingresando datos erroneos")
        await t
            .expect(loginPage.errorMessage.innerText)
            .contains('Login and/or password are wrong.')
        loginPage.waitFor(4000)
        await percySnapshot(t, 'Pantalla con login invalido')

    })

    test('Usuario con credenciales validas', async t => {

        await t.click(navbar.signInButton)
        loginPage.loginToApp('username', 'password')

        await t.expect(accountSummary.accountSummaryTab.exists).ok()
        await t.expect(loginPage.loginForm.exists).notOk()

        await t.click(navbar.userIcon)
        await t.click(navbar.logoutButton)

        await t.expect(navbar.logoutButton.exists).notOk()
        await t.expect(navbar.signInButton.exists).ok()

    })