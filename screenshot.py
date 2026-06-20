import asyncio
from playwright.async_api import async_playwright

async def screenshot():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:5173", wait_until="networkidle")
        await page.wait_for_timeout(4000)
        root_html = await page.evaluate("document.getElementById('root').innerHTML.substring(0, 300)")
        print(f"Root HTML: {root_html}")
        await page.screenshot(path="preview-hero.png", full_page=False)
        # Scroll to collection
        await page.evaluate("window.scrollTo(0, window.innerHeight)")
        await page.wait_for_timeout(1500)
        await page.screenshot(path="preview-collection.png", full_page=False)
        # Full page
        await page.screenshot(path="preview-full.png", full_page=True)
        await browser.close()
        print("SCREENSHOTS_OK")

asyncio.run(screenshot())
