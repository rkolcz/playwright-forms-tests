import {test, expect, defaultInputsData, FormInputs} from '../../fixtures/index'

test.describe('basic forms inputs interaction', () => {
    let formInput: FormInputs

    test.beforeEach('get env ready', async ({page}) => {
        await page.goto('/pages/forms/inputs')
        formInput = new FormInputs(page)
    })

    test('interact with all inputs form successfully', async ({page}) => {
        await formInput.fillDefaultInputs(defaultInputsData)
    })

    test('interact with dropdowns successfully', async ({page}) => {
        await formInput.selectOption('Option 2')
        await expect(formInput.dropDownMenu).toHaveText("Option 2")
    })

    test('interact with checkboxes successfully', async ({page}) => {
        await expect(formInput.checkbox1).not.toBeChecked()
        await formInput.setCheckboxState(formInput.checkbox1, true)
        await expect(formInput.checkbox1).toBeChecked()

        await expect(formInput.checkbox2).toBeChecked()
        await formInput.setCheckboxState(formInput.checkbox2, false)
        await expect(formInput.checkbox2).not.toBeChecked()
    })

    test('radio group allows selecting only one option at a time', async ({page}) => {
        await expect(formInput.radio1).not.toBeChecked()
        await expect(formInput.radio2).toBeChecked()
        await expect(formInput.radio3).not.toBeChecked()

        await formInput.radio3.check({force: true})
        await expect(formInput.radio1).not.toBeChecked()
        await expect(formInput.radio2).not.toBeChecked()
        await expect(formInput.radio3).toBeChecked()

        await formInput.radio1.check({force: true})
        await expect(formInput.radio1).toBeChecked()
        await expect(formInput.radio2).not.toBeChecked()
        await expect(formInput.radio3).not.toBeChecked()        
    })

    test('checkbox and radio are disabled', async ({page}) => {
        await expect(formInput.disabledCheckbox).toBeDisabled()
        await expect(formInput.disabledRadio).toBeDisabled()
    })

})
