import {Selector, t } from 'testcafe'


class Navbar {
    constructor() {
        this.searchBox = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
    }

    async search(texto){
        await t
        .typeText(this.searchBox, texto, {paste: true})
        .pressKey('enter')
    }
}

export default Navbar
