import { Selector } from 'testcafe'
import { login } from '../../helper'


// prettier-ignore
fixture      `nuevo pago Test`
    .page    `http://zero.webappsecurity.com/index.html`


    test
    .before(async t => {
        
        await login("username", "password")
    })

    ("Realizar un nuevo pago", async t => {
        //Selectors

        const payBillsTab = Selector('#pay_bills_tab')
        const addNewPayeeTab = Selector('a').withText('Add New Payee')
        const form_name = Selector('#np_new_payee_name')
        const form_address = Selector('#np_new_payee_address')
        const form_account = Selector('#np_new_payee_account')
        const form_details  = Selector('#np_new_payee_details')
        const form_submitButton = Selector('#add_new_payee')
        const message = Selector('#alert_container').innerText

        //Actions

        await t.click(payBillsTab)
        await t.click(addNewPayeeTab)
        await t.typeText(form_name, "name", {paste: true})
        await t.typeText(form_address, "address", {paste: true})
        await t.typeText(form_account, "account", {paste: true})
        await t.typeText(form_details, "details", {paste: true})
        await t.click(form_submitButton)

        //Assertions
        await t.expect(message).contains("successfully created.")
    })