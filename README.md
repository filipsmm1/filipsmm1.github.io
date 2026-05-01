# Stylish & Healthy — GitHub Pages Video-Only Site

This package is clean and contains **no PDF**.

## Files

```text
index.html
styles.css
script.js
assets/
  journal_showcase_v2.mp4
```

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload the contents of this folder, not the zip itself.
3. Make sure `index.html` is in the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
6. Save.

## Important

If you see PDF code like `/Type /Page`, your repo is still serving an old PDF file as the homepage.
Delete the old PDF from the repo and make sure `index.html` is the file GitHub Pages opens.
