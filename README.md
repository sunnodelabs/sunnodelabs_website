# SunNodeLabs Website

Static GitHub Pages website for SunNodeLabs and the LineIQ mobile game.

## Pages

- `index.html` - company landing page and LineIQ overview
- `privacy.html` - public privacy policy for Google Play
- `terms.html` - terms of use
- `support.html` - support and contact details
- `deletion.html` - account and user data deletion request form
- `apps-script/deletion-requests.gs` - Google Apps Script template for saving deletion requests to Google Sheets

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

The account deletion URL will be:

```text
https://<github-username>.github.io/<repository-name>/deletion.html
```

## Google Sheet Deletion Requests

The deletion form posts to a Google Apps Script Web App. The Google Sheet should
have these columns in the first row:

```text
User | ID | Game | Date | Status
```

Setup:

1. Open the Google Sheet.
2. Go to Extensions > Apps Script.
3. Paste the contents of `apps-script/deletion-requests.gs`.
4. Update `SHEET_NAME` if your sheet tab is not named `Sheet1`.
5. Click Deploy > New deployment.
6. Select type `Web app`.
7. Set Execute as to `Me`.
8. Set Who has access to `Anyone`.
9. Deploy and copy the Web App URL.
10. In `deletion.html`, replace `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
    with the Web App URL.

After that, each form submission will append a row like:

```text
<user email/name> | <generated request id> | LineIQ | <current timestamp> | Requested
```
