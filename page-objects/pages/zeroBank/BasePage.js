import {Selector, t} from 'testcafe'

class BasePage{

    async waitFor(milisegundos){
        await t.wait(milisegundos)
    }

    async setTestSpeed(speedLevel){
        await t.setTestSpeed(speedLevel)
    }
    
}
export default BasePage