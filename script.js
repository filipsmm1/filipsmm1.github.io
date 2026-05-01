# Stylish & Healthy — GitHub Pages site

This version is fixed for GitHub Pages.

## File structure

Keep this exact structure:

```text
index.html
styles.css
script.js
assets/
  journal_showcase_v2.mp4
  stylish_healthy_journal_2026.pdf
```

## Important

The site uses relative paths:

```html
./assets/journal_showcase_v2.mp4
./assets/stylish_healthy_journal_2026.pdf
```

Do not change them to `/assets/...` for a GitHub Pages project site.

## PDF fix

The PDF is not embedded with iframe/object/embed. It is linked with normal buttons instead:

- View PDF in a new tab
- Download PDF

This avoids the weird-symbol / invalid-PDF rendering issue.

## How to publish

1. Create a GitHub repository.
2. Upload all files and folders exactly as shown above.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main`, folder `/root`.
6. Save.

Your site will be live at the GitHub Pages URL shown there.
