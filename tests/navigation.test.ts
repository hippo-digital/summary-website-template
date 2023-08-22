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

test("Left Navigation is loaded", async ({ page }) => {
    await expect(page.getByTestId("left-side-nav-tree-link").filter({ hasText: "Introduction" }).first()).toBeVisible();
});

test("Current page is selected in simple navigation", async ({ page }) => {
    await page.goto("/blueprints");

    const navItem = page.getByTestId("left-side-nav-tree-link").filter({ hasText: "Blueprints" }).first();

    await expect(navItem).toBeVisible();
    await expect(navItem).toHaveAttribute("aria-current", "page");
});

test("Current page is selected with query parameters", async ({ page }) => {
    await page.goto('/blueprints?query="test"');

    const navItem = page.getByTestId("left-side-nav-tree-link").filter({ hasText: "Blueprints" }).first();

    await expect(navItem).toBeVisible();
    await expect(navItem).toHaveAttribute("aria-current", "page");
});

test("Current page is selected in nested navigation", async ({ page }) => {
    await page.goto("/technologies/docker/docker-compose");

    const navItem = page
        .getByTestId("left-side-nav-tree-link")
        .filter({ hasText: "Introduction to Docker Compose" })
        .first();

    await expect(navItem).toBeVisible();
    await expect(navItem).toHaveAttribute("aria-current", "page");
});
