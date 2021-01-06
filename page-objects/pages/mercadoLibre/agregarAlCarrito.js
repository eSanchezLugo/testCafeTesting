import {Selector, t} from  'testcafe'


class agregarAlCarrito{
    constructor(){
        this.agregarAlCarrioto = Selector('input[name="submit.add-to-cart"]')
        this.procederAlPago = Selector('span#attach-sidesheet-checkout-button>span>input')

    }
}
export default agregarAlCarrito