import {Selector} from 'testcafe'

// prettier-ignore
fixture      `FeedBack Test`
    .page    `http://zero.webappsecurity.com/index.html`

test("Enviar formulario de comentarios", async t => {
    //Selectors

    const   linkToFeedBack = Selector('#feedback')
    const   form_name = Selector('#name')
    const   form_email = Selector('#email')
    const   form_subject = Selector('#subject')
    const   form_comment = Selector('#comment')
    const   form_submitButton = Selector('input').withAttribute('value', 'Send Message')
    const   message = Selector('div').innerText
    
    //Actions
    
    await t.maximizeWindow()
    await t.click(linkToFeedBack)
    await t.typeText(form_name, 'NAME', {paste: true})
    await t.typeText(form_email, 'test@email.com', {paste: true})
    await t.typeText(form_subject, 'SUBJECT', { paste: true})
    await t.typeText(form_comment, "Escribimos un comentario aquí", {paste: true})
    await t.click(form_submitButton)

    //Assertions

    await t.expect(message).contains('Thank you for your comments') 
})