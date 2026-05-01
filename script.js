# Stylish & Healthy — GitHub Pages Site

This version is fixed for GitHub Pages.

## Important fix
The PDF is **not embedded as an iframe/object**. Some browsers or setups can render embedded PDFs as weird symbols or fail with “Invalid PDF.” This site links to the PDF normally instead:

- `assets/stylish_healthy_journal_2026.pdf`
- `assets/journal_showcase_v2.mp4`

## Upload to GitHub Pages

1. Create a GitHub repository.
2. Upload everything in this folder to the root of the repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`
3. Go to **Settings → Pages**.
4. Choose **Deploy from branch**.
5. Select **main** and **/root**.
6. Wait for GitHub to publish the site.

## Editing checkout buttons
In `index.html`, replace the PDF links in the `#buy` section with your payment link.

Example:
```html
<a class="btn primary" href="YOUR-CHECKOUT-LINK">Buy now</a>
```
