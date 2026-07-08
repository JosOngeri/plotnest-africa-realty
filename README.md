# Plotnest Africa Realty Website

A modern, responsive, multi-page real estate website for **Plotnest Africa Realty Ltd**, a Kenyan company selling land, homes, apartments, and commercial properties.

The site is built as a static HTML/CSS/JS project and is ready to host on **GitHub Pages**.

---

## Pages

- **Home** (`index.html`) — hero, search, featured listings, stats, services, testimonials
- **Listings** (`listings.html`) — all properties with live filters
- **Property Detail** (`property.html?id=1`) — dynamic detail page for each listing
- **About** (`about.html`) — company story, values, and team
- **Services** (`services.html`) — real estate services offered
- **Contact** (`contact.html`) — contact form and company information

---

## Features

- Mobile-first responsive design with Tailwind CSS
- Kenyan property listings with prices in KES
- Interactive property filters (location, type, county, price range)
- Dynamic property detail pages using URL parameters
- WhatsApp and phone call CTAs
- Reusable navigation, footer, and property cards
- SEO-friendly meta descriptions and page titles
- No build step required

---

## How to host on GitHub Pages

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and create a new public repository, e.g. `plotnest-website`.

2. **Upload these files**
   - Push the contents of this folder to the root of the repository:
     ```
     index.html
     listings.html
     property.html
     about.html
     services.html
     contact.html
     styles.css
     main.js
     public/
     README.md
     ```

3. **Enable GitHub Pages**
   - In your repository, go to **Settings → Pages**.
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Select the **main** branch and the **/(root)** folder.
   - Click **Save**.

4. **Visit your site**
   - After a minute or two, GitHub will show you a live URL like:
     ```
     https://yourusername.github.io/plotnest-website/
     ```

5. **Optional: use a custom domain**
   - In **Settings → Pages → Custom domain**, enter your domain (e.g. `www.plotnest.co.ke`).
   - Add a `CNAME` file to the repository root containing your domain name.
   - Update your DNS settings as instructed by GitHub.

---

## Local preview

You can preview the website locally without any build tools:

**Option 1 — Open directly**
Double-click `index.html` in your file explorer.

**Option 2 — Use a simple local server**
If you have Python installed, run this command inside the project folder:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Customization

### Property listings
All listings are stored in `main.js` inside the `properties` array. Edit the objects there to change:
- Title, location, county, price, size, bedrooms, bathrooms
- Images and gallery
- Description and features
- Agent contact details

### Images
The site uses placeholder images from Unsplash. Replace the `image` and `gallery` URLs in `main.js` with your own property photos.

### Logo
Replace files in the `public/logos/` folder with your own logo versions. The main logo is `public/logos/logo-primary.png`.

### Colors
The brand colors are set through Tailwind utility classes:
- Primary green: `green-700`, `green-800`, `green-900`
- Accent orange: `orange-500`, `orange-400`

You can update the custom green shades in `styles.css` or use arbitrary Tailwind values like `text-[#006633]`.

---

## Contact form note

The contact form is currently a static demo. When a visitor submits the form, it shows a success message but does not send an email.

To make it functional, connect it to a free form backend such as:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Google Apps Script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server)

---

## License

This project is provided for Plotnest Africa Realty Ltd. You may modify and deploy it freely.
