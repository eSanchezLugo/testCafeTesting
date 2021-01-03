import {Selector} from 'testcafe'
import FeedbackPage from '../../page-objects/pages/zeroBank/FeedbackPage'


const feedbackPage = new  FeedbackPage()

// prettier-ignore
fixture      `FeedBack Test`
    .page    `http://zero.webappsecurity.com/index.html`

test("Enviar formulario de comentarios", async t => {


    const   linkToFeedBack = Selector('#feedback')

    await t.maximizeWindow()
    await t.click(linkToFeedBack)
    feedbackPage.llenarFormulario('NAME', 'test@email.com', 'SUBJECT', "Escribimos un comentario aquí")

    feedbackPage.waitFor(4000)

    await t.expect(feedbackPage.message.innerText)
    .contains('Thank you for your comments') 
})