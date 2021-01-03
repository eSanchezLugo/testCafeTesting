import {Selector, t} from 'testcafe'
import BasePage from './BasePage'


class FeedbackPage extends BasePage{
    constructor(){
        
        super()
        this.formName = Selector('#name')
        this.formEmail = Selector('#email')
        this.formSubject = Selector('#subject')
        this.formComment = Selector('#comment')
        this.formSubmitButton = Selector('input').withAttribute(
            'value', 
            'Send Message')
        this.message = Selector('div')

    }

    async llenarFormulario (name, email, subject, comment){
        await t
            .typeText(this.formName, name, {paste: true, replace: true })
            .typeText(this.formEmail, email, {paste: true, replace: true })
            .typeText(this.formSubject, subject, {paste: true, replace: true })
            .typeText(this.formComment, comment, {paste: true, replace: true })
            .click(this.formSubmitButton)
    }
}
export default FeedbackPage