import { test as base, expect, Page } from "@playwright/test";

const test = base.extend<{ page: Page }>({
    page: async ({ page }, use) => {
        await page.goto("/");
        await expect(page.locator("h1")).toContainText("Engineering and Data handbook");
        await page
            .getByRole("button", {
                name: "Sign in as development user",
            })
            .click();
        await expect(
            page.getByRole("button", {
                name: "Sign out",
            })
        ).toBeVisible();
        await use(page);
    },
});

export default test;
