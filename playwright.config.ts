import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  expect: { timeout: 5_000 },
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
  },

  projects: [
    {name: 'chromium', use: { ...devices['Desktop Chrome'] }},
    {name: 'firefox', use: { ...devices['Desktop Firefox'] }},
    {name: 'webkit', use: { ...devices['Desktop Safari'] }},
    {name: 'firefox-small-viewport', use: {...devices['Desktop Firefox'], viewport: { width: 390, height: 844 }}},
  ],
});
