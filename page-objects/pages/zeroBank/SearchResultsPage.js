import {Selector, t} from 'testcafe'

class SearchResultsPage{
    constructor(){

        this.resultsTitle = Selector("h2")
        this.linkTest = Selector("div")

    }

}

export default SearchResultsPage