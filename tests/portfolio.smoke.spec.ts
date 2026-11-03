import { test, expect } from "@playwright/test"

test("redesigned portfolio loads and gates work", async ({ page }) => {
  await page.goto("http://127.0.0.1:5175/?redesign=20261102#/")
  await expect(page.getByRole("heading", { name: /I'm Daniel Johnson/i })).toBeVisible()
  await expect(page.getByText("What I do")).toBeVisible()
  await page.getByRole("button", { name: "Work", exact: true }).click()
  await expect(page.getByRole("dialog")).toBeVisible()
  await expect(page.getByLabel("Portfolio password")).toBeVisible()
})
