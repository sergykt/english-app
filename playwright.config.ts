import path from 'path';
import { fileURLToPath } from 'url';
import { config as dotenvConfig } from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenvConfig({ path: path.resolve(__dirname, '.env') });
const devServerUrl = 'http://localhost:3000';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: devServerUrl,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: [],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: [],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: [],
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: devServerUrl,
    reuseExistingServer: !process.env.CI,
  },
});
