import {type Locator, type Page, expect, formLayoutsData} from '../fixtures/index'

export class FormLayout {
    readonly page: Page
    readonly inlineForm: Locator
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly rememberMeCheckbox: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.inlineForm = page.locator('nb-card', { hasText: 'Inline form' })
        this.nameInput = this.inlineForm.getByPlaceholder('Jane Doe')
        this.emailInput = this.inlineForm.getByPlaceholder('Email')
        this.rememberMeCheckbox = this.inlineForm.getByRole('checkbox', {name: "Remember me"})
        this.submitButton = this.inlineForm.getByRole('button', {name: "submit"})
    }

    async fill(data: typeof formLayoutsData) {
        await this.nameInput.fill(data.name)
        await this.emailInput.fill(data.email)
    }
}