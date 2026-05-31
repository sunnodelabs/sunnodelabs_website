# SunNodeLabs Website

Static GitHub Pages website for SunNodeLabs and the LineIQ mobile game.

## Pages

- `index.html` - company landing page and LineIQ overview
- `privacy.html` - public privacy policy for Google Play
- `terms.html` - terms of use
- `support.html` - support and contact details

## Local Preview

Open `index.html` in a browser, or serve the folder with any static file server.

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

After pushing this repository to GitHub:

1. Open the repository on GitHub.
2. Go to Settings > Pages.
3. Set Source to `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for GitHub to publish the site.

The privacy policy URL will be:

```text
https://<github-username>.github.io/<repository-name>/privacy.html
```
