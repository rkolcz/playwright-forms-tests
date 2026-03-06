import {test, expect} from '@playwright/test'
import {defaultInputsData} from '../../test-data/formInputs'
import {FormInputs} from '../../components/formInputs.component'

test.beforeEach('get env ready', async ({page}) => {
    await page.goto('/pages/forms/inputs')
})

test('interact with all inputs form successfully', async ({page}) => {
    const formInputs = new FormInputs(page)
    await formInputs.fillDefaultInputs(defaultInputsData)
})


test('interact with dropdowns successfully', async ({page}) => {

        const dropDownMenu = page.locator('nb-card-body nb-select')
        await dropDownMenu.click()

        const optionList = page.getByRole('list').locator('nb-option')
        await expect(optionList).toHaveText(["Option 1", "Option 2"])
        await optionList.filter({hasText: "Option 2"}).click()
        await expect(dropDownMenu).toHaveText("Option 2")

})

