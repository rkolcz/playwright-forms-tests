import {test, expect, defaultInputsData, FormInputs} from '../../fixtures/index'

test.describe('forms-interaction', () => {
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

    test('interact with checkboxes & radios successfully', async ({page}) => {
        await expect(formInputs.checkbox1).not.toBeChecked()
        await formInputs.setCheckboxState(formInputs.checkbox1, true)
        await expect(formInputs.checkbox1).toBeChecked()

        await expect(formInputs.checkbox2).toBeChecked()
        await formInputs.setCheckboxState(formInputs.checkbox2, false)
        await expect(formInputs.checkbox2).not.toBeChecked()
    })


})
