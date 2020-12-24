import {Selector} from 'testcafe'

// prettier-ignore
fixture     `Empezar con TestCafe`
    .page   `https://devexpress.github.io/testcafe/example/`

    .beforeEach(async t => {

        await t.setTestSpeed(1)
    })


test('Mi primer test en TestCafe', async t => {

    const developer_name_input = Selector('#developer-name')
    const submit_button= Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    
    await t.typeText(developer_name_input, 'Eduardo')
    //await t.wait(3000)
    await t.click(submit_button)

    await t.expect(articleText).contains('Eduardo')

    
})

