import { Selector } from 'testcafe'

// prettier-ignore
fixture      `Login Test`
    .page    `http://zero.webappsecurity.com/index.html`


    test('Usuario con credenciales invalidas', async t => {

        const singInButton = Selector('#signin_button')
        await t.click(singInButton)

        const loginForm = Selector('#login_form')
        await t.expect(loginForm.exists).ok()

        const  usernameInput = Selector('#user_login')
        const  passwordInput = Selector('#user_password')
        await t.typeText(usernameInput, 'invalid username', { paste: true})
        await t.typeText(passwordInput, 'invalid password', {paste: true})

        const submitButton = Selector('.btn-primary')
        await t.click(submitButton)

        const errorMessage = Selector('.alert-error').innerText
        await t.expect(errorMessage).contains('Login and/or password are wrong.')

    })

    test('Usuario con credenciales validas', async t => {

        const singInButton = Selector('#signin_button')
        await t.click(singInButton)

        const loginForm = Selector('#login_form')
        await t.expect(loginForm.exists).ok()

        const  usernameInput = Selector('#user_login')
        const  passwordInput = Selector('#user_password')
        await t.typeText(usernameInput, 'username', { paste: true})
        await t.typeText(passwordInput, 'password', {paste: true})

        const submitButton = Selector('.btn-primary')
        await t.click(submitButton)

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