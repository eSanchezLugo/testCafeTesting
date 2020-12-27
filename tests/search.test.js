import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar =  new Navbar()
const searchResultsPage = new SearchResultsPage()

// prettier-ignore
fixture      `Login Test`
    .page    `http://zero.webappsecurity.com/index.html`

test("buscando informacion en la caja de busqueda", async t => {


    navbar.search('online bank')

    await t.expect(searchResultsPage.resultsTitle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(searchResultsPage.linkTest.innerText)
    .contains('Zero - Free Access to Online Banking')
})
