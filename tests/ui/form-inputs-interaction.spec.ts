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




