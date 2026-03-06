import {test, expect, formLayoutsData, FormLayout} from '../../fixtures/index'

test.describe('basic forms layouts interaction', () => {
    let formLayout: FormLayout

    test.beforeEach('get env ready', async ({page}) => {
        await page.goto('/pages/forms/layouts')
        formLayout = new FormLayout(page)
    })

    test('user can submit inline form', async ({page}) => {
        await formLayout.fill(formLayoutsData)

        await expect(formLayout.rememberMeCheckbox).not.toBeChecked()
        await formLayout.rememberMeCheckbox.check({force: true})
        await expect(formLayout.rememberMeCheckbox).toBeChecked()

        await formLayout.submitButton.click()
    })

})