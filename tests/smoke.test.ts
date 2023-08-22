import { expect } from "@playwright/test";
import test from "./utils";

test("Search brings results", async ({ page }) => {
    await page.getByRole("combobox").fill("docker");
    await page
        .getByRole("button", {
            name: "Search",
        })
        .click();
    await expect(
        page.getByRole("link", {
            name: "Introduction to Docker Compose",
        })
    ).toBeVisible();
});
