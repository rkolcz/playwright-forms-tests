import {test, expect, defaultInputsData, FormInputs} from '../../fixtures/index'

let formInputs: FormInputs

test.beforeEach('get env ready', async ({page}) => {
    await page.goto('/pages/forms/inputs')
    formInputs = new FormInputs(page)
})

test('interact with all inputs form successfully', async ({page}) => {
    await formInputs.fillDefaultInputs(defaultInputsData)
})

test('interact with dropdowns successfully', async ({page}) => {
    await formInputs.selectOption('Option 2')
    await expect(formInputs.dropDownMenu).toHaveText("Option 2")
})