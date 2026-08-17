# Umami Analytics Setup

Umami tracking is configured with Website ID:

```text
1f8a96b2-1f9f-4f9d-9a97-fbc6231ce509
```

No local package, database, Firebase Function, login, or access key is required.

## Finish the separate report page

1. In Umami Cloud, open **Websites**.
2. Edit the wedding website.
3. Under **Share URL**, select **Add**.
4. Enable the report views you want to share and save.
5. Copy the generated public Share URL.
6. Paste it into `assets/js/umami-config.js`:

```js
shareUrl: 'https://cloud.umami.is/share/YOUR_SHARE_SLUG'
```

After that, `website-analytics.html` will display the public Umami report and provide an **Open full report** fallback link.

## Tracking behavior

- `index.html`, `index-Telugu.html`, and `gallery.html` load the Umami Cloud tracker.
- `file://`, `localhost`, and `127.0.0.1` previews are excluded, so development refreshes do not count.
- `guest-wishes.html` and `website-analytics.html` are not counted.
- Firebase Firestore remains in use only for Guest Wishes.
- The Umami Cloud Hobby plan currently supports one website, up to 100,000 events per month, and six months of retention.
