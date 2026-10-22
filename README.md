# Greek & All — poppy color preview

This is a color-exploration copy of the Greek & All website. It keeps the primary cream, black and yellow base, and adds the vivid coral, deep green, sky blue, pink and olive colors from the deck. It uses Bowlby One SC headings and DM Sans body text.

## What works in this preview

- Browse eight categories: rice bowls, salad bowls, pita pockets, sandwiches, smoothie bowls, smoothies, shakes and cold-pressed juices.
- Open an item, choose options or extras, and add it to the bag.
- Change quantities and see a running subtotal. The bag is saved in this browser on this computer.
- View the page on a phone or computer.

## Important: this is not taking real orders yet

The menu and prices are examples for layout. The bag is only saved in this browser. The checkout form is a demonstration and does **not** send orders, payments, addresses or customer details to the restaurant. It does not create a kitchen ticket, alert the owner, or notify delivery riders. Please do not enter real customer information here.

## Open the website on Windows

1. If you received a ZIP, right-click it and choose **Extract All**.
2. Open the extracted greek-and-all-landing-page folder.
3. Double-click **Open Preview.bat**. Your browser should open the website.
4. If that does not work, double-click **index.html** instead.
5. Click a category, choose a dish, and try the bag. The preview works without installing anything.

The Google fonts need an internet connection. The rest of the site and its illustrations are stored with the website.

## Change the words, logo, menu or pictures

The main editing file is config.js. Open it with Notepad. The most commonly changed settings are near the top:

- brandName, tagline, headline, and intro control the name and main message. In headline, \n makes a new line.
- logoUrl controls the logo used in the header and footer. Put a replacement picture in the assets folder, then change this path.
- primaryCta and secondaryCta control the button wording and where the buttons go. For example, href: "#menu" takes someone to the menu section.
- location, locationText, hours, and locationLink control the location details. Leave these as placeholders until they are confirmed.
- categories controls the category names, descriptions and category illustrations.
- menuItems controls every dish name, description, displayed rupee price, picture, choices and paid extras. The current dishes and prices are examples; replace them with the final menu before launch.
- heroImageUrl controls the large avocado illustration near the top. Leave it blank to use the included placeholder drawing, or put an image path there.

To change a menu illustration or food photo, copy the new image into assets and change the matching image path in config.js. The imageAlt text is what a screen reader says about the picture. Category illustrations use each category's art path and artAlt text.

Keep image files inside assets and use a path such as assets/my-food-photo.jpg. Keep the quote marks and commas already in the file. For a headline with two lines, type \n between the lines.

This poppy preview uses the secondary colors from the brand deck: coral #F15B45, deep green #31543B, sky blue #8FD8F5, pink #F4A3B8 and olive #A8B83F. The primary cream, black and yellow remain in the design. To return to the original cream, black and yellow look, use the separate Greek & All website preview.

## Change the colours or font

Open styles.css. The colour settings are at the very top:

- --paper: warm cream page background
- --ink: near-black text and dark panels
- --yellow: sunshine yellow buttons and highlights
- --orange: small accent details
- --white, --yellow-light, --muted, and --line: supporting colours

The supplied brand deck names Bowlby One SC for bold headings and DM Sans for body text. Those font choices are loaded near the top of index.html. After saving an edit, refresh the browser tab to see it. If a change breaks the page, undo the last edit and check that text is inside quotes and each setting is followed by a comma.

## What is needed for real online ordering

This preview is the visual front of a website. Before real customers can order, the business needs an online ordering service that securely manages the menu, orders and customer records. It also needs payment setup, the restaurant's kitchen ticket or printer workflow, an owner alert, delivery zones and timing, and a way to assign jobs to riders. The website's order buttons can then be connected to that service. This project has not connected or configured those parts.

A website host is a service that stores these files on an internet-connected computer so customers can open the site. A free static host can show the website, but it will not make the preview checkout send orders. When the real ordering system is chosen, the site can be uploaded to a host. The host will give the exact domain-address settings (called DNS settings) to connect a purchased domain. Only change those settings after choosing the host and confirming the real ordering journey works.

## Publish the design now, connect ordering later

This project is ready to be published as a public design preview. The sample menu, prices and bag are still demonstrations; they do not accept orders or save customer information. Keep the preview message visible until the ordering vendor is connected and the real menu is ready.

The included `.github/workflows/deploy.yml` file is the automatic publishing setup. Once this folder is in a GitHub repository and GitHub Pages is enabled, every approved update sent to the `main` branch is automatically published. Visitors then see the latest published design. Future design changes do not require rebuilding the site by hand.

### Current publishing status and next steps

The repository is public, and the site is live at [the temporary preview address](https://scoobysnackenjoyer.github.io/greekandall.com/). GitHub Pages republishes approved changes sent to `main`. No custom-domain or DNS changes have been made.

1. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source, or check that it is already selected.
2. In **Actions**, open **Publish Greek & All website** and wait for the latest run to complete successfully. If it has not run, a new update to the `main` branch starts it automatically.
3. Open the temporary preview on a phone and computer. The sample menu and bag are design demonstrations, not real ordering.
4. When the design and ordering plan are ready, add `greekandall.com` under **Settings → Pages → Custom domain**.
5. At the company where you bought the domain, enter only the DNS records GitHub Pages displays. Do not guess or remove existing records. If the domain points to another service, check before replacing records.
6. Return to GitHub Pages and wait for domain verification and HTTPS, then check `https://greekandall.com` on a phone and computer. The preview checkout still will not send orders.

### How later edits reach visitors

Tell me the design or content changes you want. I can update this project and publish the approved files to its GitHub repository. GitHub then automatically republishes the site from `main`; once that publishing step finishes, visitors receive the updated version at the same address. The domain does not need to be changed for ordinary design updates.

When you select an ordering vendor, we can connect its supported ordering link, widget or integration. That is a separate step from publishing the visual site. Until then, this page does not accept payments, create kitchen tickets, notify staff or riders, or save customer details.

The repository is public, and its GitHub Pages preview is live. The custom domain and DNS have not been configured.

## Project files

- index.html — page structure and the checkout preview
- config.js — the main editable content, logo path, pictures, categories and sample menu
- styles.css — brand colours, fonts, layout and phone-sized adjustments
- script.js — menu filtering, item choices, local bag and preview-only checkout
- assets/ — supplied logo and placeholder food illustrations
- Open Preview.bat — opens the website on Windows
