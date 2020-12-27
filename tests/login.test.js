import { Selector } from 'testcafe'
import { login } from '../helper'

// prettier-ignore
fixture      `Login Test`
    .page    `http://zero.webappsecurity.com/index.html`


    test('Usuario con credenciales invalidas', async t => {

        await login('invalid username', 'invalid password')
        const errorMessage = Selector('.alert-error').innerText
        await t.expect(errorMessage).contains('Login and/or password are wrong.')

    })

    test('Usuario con credenciales validas', async t => {

        const singInButton = Selector('#signin_button')
        const loginForm = Selector('#login_form')

        await login ('username', 'password')

        const accountSummaryTab = Selector('#account_summary_tab')
        await t.expect(accountSummaryTab.exists).ok()
        await t.expect(loginForm.exists).notOk()

        const userIcon = Selector('.icon-user')
        await t.click(userIcon)

        const logoutButton = Selector('#logout_link')
        await t.click(logoutButton)

        await t.expect(logoutButton.exists).notOk()
        await t.expect(singInButton.exists).ok()

    })