import {type Locator, type Page, expect, defaultInputsData} from '../fixtures/index'

export class FormInputs {
    readonly page: Page
    readonly projectInputField: Locator
    readonly nickInputField: Locator
    readonly lastNameInputField: Locator
    readonly passInputField: Locator
    readonly rectangleBorderInputField: Locator
    readonly semiRoundBorderInputField: Locator
    readonly roundedBorderInputField: Locator
    readonly disabledInputInputField: Locator
    readonly textAreaInputField: Locator
    readonly smallInputInputField: Locator
    readonly mediumInputInputField: Locator
    readonly largeInputInputField: Locator
    readonly dropDownMenu: Locator
    readonly optionList: Locator
    readonly checkbox1: Locator
    readonly checkbox2: Locator

    constructor(page: Page){
        this.page = page
        this.projectInputField = page.getByPlaceholder("Project")
        this.nickInputField = page.getByPlaceholder("Nick")
        this.lastNameInputField = page.getByPlaceholder("Last Name")
        this.passInputField = page.getByPlaceholder("Password")
        this.rectangleBorderInputField = page.getByPlaceholder("Rectangle border")
        this.semiRoundBorderInputField = page.getByPlaceholder("Semi-round border")
        this.roundedBorderInputField = page.getByPlaceholder("Rounded border")
        this.disabledInputInputField = page.getByPlaceholder("Disabled input")
        this.textAreaInputField = page.getByPlaceholder("Text Area")
        this.smallInputInputField = page.getByPlaceholder("Small Input")
        this.mediumInputInputField = page.getByPlaceholder("Medium Input")
        this.largeInputInputField = page.getByPlaceholder("Large Input")
        this.dropDownMenu = page.locator('nb-card-body nb-select')
        this.optionList = page.getByRole('list').locator('nb-option')
        this.checkbox1 = page.getByRole('checkbox', { name: 'Checkbox 1' })
        this.checkbox2 = page.getByRole('checkbox', { name: 'Checkbox 2' })

    }

    async fillDefaultInputs(data: typeof defaultInputsData) {
        await this.projectInputField.fill(data.project)
        await this.nickInputField.fill(data.nick)
        await this.lastNameInputField.fill(data.lastName)
        await this.passInputField.fill(data.password)
        await this.rectangleBorderInputField.fill(data.rectangleBorder)
        await this.semiRoundBorderInputField.fill(data.semiRoundBorder)
        await this.roundedBorderInputField.fill(data.roundedBorder)
        await this.textAreaInputField.fill(data.textArea)
        await this.smallInputInputField.fill(data.smallInput)
        await this.mediumInputInputField.fill(data.mediumInput)
        await this.largeInputInputField.fill(data.largeInput)
    }

    async selectOption(optionText: string){
        await this.dropDownMenu.click()
        await expect(this.optionList.first()).toBeVisible()
        await this.optionList.filter({ hasText: optionText }).click()
    }

    async setCheckboxState(checkbox: Locator, shouldBeChecked: boolean) {
        const isChecked = await checkbox.isChecked()
        if (shouldBeChecked && !isChecked) {
            await checkbox.check({ force: true })
        } else if (!shouldBeChecked && isChecked) {
            await checkbox.uncheck({ force: true })
        }
    }
}