# Greek & All — website editing guide

The current website is [greekandall.com](https://greekandall.com). Its official files are in the public [Greek & All GitHub repository](https://github.com/scoobysnackenjoyer/greekandall.com). This guide explains where the common changes live and how to preview and publish them.

The folder containing this README is a local design copy. For the latest website, use the files at the top level of the GitHub repository. You can edit those files in GitHub in your browser, or download/clone them to your computer first.

## First, keep these two things in mind

- Saving a change on your computer only changes your own copy. Visitors see it after the changed files are committed to the GitHub repository and the automatic publishing job finishes.
- The menu, prices, cart and checkout are still a design demonstration. The preview does not take orders, payments or customer details, and does not send kitchen tickets or notify delivery riders. Never enter real customer information.

The repository is public, so anyone can read or download its files. Only people with edit permission on the GitHub account can change the live website. Never put passwords, payment keys, customer records or other private information in these files.

## The four files to know

| File | What it controls | Beginner-friendly rule |
|---|---|---|
| `config.js` | Most editable words, logo path, buttons, categories, sample dishes, prices, choices and extras | Start here for text, menu and item information |
| `styles.css` | Colors, text colors, fonts, spacing, sizes, section layouts and phone layout | Use the clearly marked **EASY DESIGN CONTROLS** block near the bottom for common colors |
| `index.html` | Page sections and labels that are fixed on the page; a few artwork paths | Use this for fixed headings or artwork not controlled by `config.js` |
| `script.js` | How filtering, item choices, the bag, preview checkout and scroll effects behave | Ask for coding help before changing behavior |

The `assets/` folder holds the logo, illustrations and food photos.

## A safe way to make any change

1. Change one small thing at a time.
2. Before editing, download a backup copy of the file or rely on GitHub's saved file history.
3. Preview the result on a computer and on a phone-sized screen.
4. If something breaks, undo only the last change. In GitHub, a previous saved version can be opened from the file's **History**.
5. When the change looks right, follow **Publish your changes** below.

When editing code, change only the words or color values you mean to change. Keep the surrounding quotation marks, commas, braces, semicolons and brackets. Those marks are part of the file's structure.

## Change words and menu information in `config.js`

Open `config.js` and use the headings and comments as signposts. Text values are inside double quotes.

### Brand and opening section

- `brandName`: brand name used by the page.
- `logoUrl`: image path for the header and footer logo.
- `tagline`, `headline`, `intro`, `heroNote`: opening section text.
- In `headline`, type `\n` between lines. Example: `"Come hungry.\nLeave happy."`.
- `heroImageUrl` and `heroImageAlt`: main illustration/photo and its description. Leave the image path empty to use the included default artwork.

### Buttons and links

`primaryCta` and `secondaryCta` each have a `label` (the words people see) and an `href` (where the button goes). For a section on this same page, use its ID with a # in front, such as `"#menu"` or `"#visit"`. To link to a different website, use its full address beginning with `https://`.

### Categories

The `categories` list controls the category tiles. Each entry has:

- `id`: a short unique code, usually lowercase with dashes, such as `"rice-bowls"`.
- `name`: the label visitors see.
- `detail`: its short description.
- `art` and `artAlt`: the illustration path and an image description.

Keep each `id` unique. If you rename an ID, update the matching products' `categoryId` too.

### Sample dishes, prices and choices

The `menuItems` list controls the sample food cards and item pop-ups. Each item has an `id`, `categoryId`, `name`, `description`, `price`, `image`, and `imageAlt`. Prices are numbers in rupees: write `249`, not `"₹249"`.

- `modifierGroups` adds choices such as size, protein, sauce or base. Each group has a `name` and `choices`. A choice has a `name` and an extra `price`; use `0` if included.
- `extras` adds optional paid additions.
- For no custom choices, keep `modifierGroups: []`. For no extras, keep `extras: []`.
- Every product `id` must be unique, and its `categoryId` must match a category ID.

These settings fill the existing menu pop-up and bag. A new kind of option, a different pop-up layout, or a new checkout step requires a code change in `script.js); adding a new word to `config.js` alone will not create a new feature.

### Other page copy

- Juice heading/text: `juiceHeadlineLead`, `juiceHeadlineAccent`, `juiceText`.
- Salad story paragraph: `ourWayText`.
- Visit section: `locationText`, `location`, `locationLink`, `hours`.
- Footer line: `footerLine`.
- `locationLink` can be a full Google Maps or other directions link. Leave it empty until you have the correct location.

Some small labels and large headings are written directly in `index.html), including navigation labels and section headings such as “Shop by category” and “No sad salads. No boring bowls.” To change one of those, open `index.html), search for the exact words, replace them, and leave the surrounding HTML tags in place.

## Replace a logo, illustration or food photo

1. Prepare the image. Use PNG or WebP for a transparent sticker; use JPG or WebP for a normal photo. If the picture has a colored square background, it will still show as a square—use a genuinely transparent image if you want it to blend into the section.
2. Give the file a short name with no spaces, for example `new-salad.png`.
3. Put it in the repository's `assets/` folder. In GitHub, use **Add file → Upload files**. When editing on your computer, copy the image into the matching `assets` folder.
4. Set the image path to `assets/new-salad.png` and update the matching `Alt` description. The path is relative to `index.html`; do not begin it with a slash.

Common places to change images:

- Header/footer logo: `logoUrl` in `config.js`.
- Hero artwork: `heroImageUrl` in `config.js`.
- Category doodles: each category's `art` and `artAlt` in `config.js`.
- Dish photos: each item's `image` and `imageAlt` in `config.js`.
- Juice artwork and salad sticker: their `src` paths are in `index.html`. The nearby comments mark these replacement points.

If you keep the same filename, you can replace the old image file with a new one and leave its code path alone. After publishing, refresh the page fully if your browser still shows the old picture.

## Change section backgrounds, text colors and basic styling

Open `styles.css`. Near the bottom, find the comment **EASY DESIGN CONTROLS — EDIT THESE VALUES FIRST**. Change only the color after the colon; keep the semicolon. These are the current starting colors:

| Control in the stylesheet | What it changes |
|---|---|
| `--edit-page-background` | Overall page background |
| `--edit-header-background` | Sticky header background |
| `--edit-announcement-background` | Thin message bar at the top |
| `--edit-menu-background` | Shop-by-category and menu section background |
| `--edit-juice-background` | Juice feature section |
| `--edit-salad-background` | Salad story section |
| `--edit-visit-background` | Visit/location section |
| `--edit-footer-background` | Footer |
| `--edit-hero-art-background` | Colored shape behind the opening illustration |
| `--edit-main-heading` / `--edit-main-copy` | Main heading text / common paragraph text |
| `--edit-coral-highlight` | Coral emphasis on headings |
| `--edit-salad-heading` / `--edit-salad-copy` | Salad story text |
| `--edit-juice-heading` / `--edit-juice-copy` | Juice feature text |
| `--edit-visit-heading` / `--edit-visit-copy` | Visit section heading / paragraph |
| `--edit-visit-highlight` / `--edit-visit-label` | Emphasized visit heading / small label |
| `--edit-button-background` / `--edit-button-text` | Main yellow buttons |
| `--edit-button-hover` | Main button color while the pointer is over it |

Approved brand colors used in the design include cream `#FFF7E8`, ink `#111111`, sunshine yellow `#FFC928`, coral `#F15B45`, forest green `#31543B`, sky blue `#8FD8F5`, poppy pink `#F4A3B8`, olive `#A8B83F`, turquoise `#56C3CC`, and pastel yellow `#FFF0C7`.

A color is written as a six-digit code beginning with #. For example, to try coral for the juice section, replace the value for `--edit-juice-background` with `#F15B45`. Save and refresh the page to see it. For readable text, use a dark text color on light backgrounds and white or cream text on dark backgrounds.

For a specific element not covered by the easy controls, search in `styles.css` for its name in the map below. The declaration `background` changes the fill behind an element; `color` changes its text. If you see the same selector more than once, use the last matching rule near the bottom because later rules override earlier ones.

| Part of the page | Search for this style name |
|---|---|
| Whole page | `body` |
| Hero / opening area | `.hero`, `.hero-copy`, `.hero-art` |
| Category tiles | `.category-card`, `.menu-card`, `.menu-mascot` |
| Dish cards | `.product-card`, `.product-image-frame`, `.product-name` |
| Juice text/artwork | `.juice-section`, `.juice-copy h2`, `.juice-art` |
| Salad text/artwork | `.our-way-section`, `.way-copy h2`, `.way-salad-sticker` |
| Visit/location | `.visit-section`, `.visit-inner h2`, `.visit-card` |
| Buttons | `.button-primary`, `.nav-cta` |
| Footer | `.site-footer`, `.footer-inner` |

### A step-by-step way to edit a style

1. Decide exactly what you want to change, such as “make the salad headline larger” or “give the juice section more space.”
2. In `index.html`, find the section and its class name. For example, `class="juice-section"` identifies the juice section. In CSS, a class name is searched with a dot: `.juice-section`.
3. Open `styles.css` and press **Ctrl+F**. Search for the class name or a distinctive child name, such as `.juice-copy h2` for the juice headline or `.way-salad-sticker` for the salad image.
4. Find the property that controls the change. Change only its value and keep the punctuation around it.
5. Save, refresh the page, and check both the computer and phone layout before changing another thing.

The stylesheet has some long, compact lines. That is normal. Use **Ctrl+F** to find a selector and carefully edit just the value you need; do not replace the whole line. In a CSS rule, the words before the colon name the setting, and the value after the colon is what you change. Keep the semicolon at the end.

| If you want to change… | Look for this setting | What it means |
|---|---|---|
| Letter color | `color` | Color of the words |
| Background/fill color | `background` or `background-color` | Color behind the words or image |
| Text size or thickness | `font-size` / `font-weight` | Larger/smaller text / lighter/bolder text |
| Space between lines or letters | `line-height` / `letter-spacing` | Vertical line spacing / character spacing |
| Text alignment | `text-align` | `left`, `center`, or `right` |
| Space inside a box | `padding` | Space between the box edge and its contents |
| Space outside a box | `margin` | Space around the outside of an element |
| Space between items in a row/grid | `gap` | Distance between neighboring items |
| Rounded corners | `border-radius` | Corner roundness |
| Image size | `width` / `max-width` / `height` | Image dimensions or maximum size |
| How an image fits its box | `object-fit` | `contain` shows the whole sticker; `cover` fills the box and may crop |

For example, if you find `font-size: 15px;` and want slightly larger text, change only `15px` to `17px`. If you change a heading size, also check the phone view: large words may wrap differently on a narrow screen.

### Desktop changes and phone changes

The ordinary rule usually sets the desktop/tablet appearance. Near the bottom of `styles.css`, blocks beginning with `@media` adjust the same elements for smaller screens. The block `@media(max-width:620px)` applies to phones. If you change a heading or image size for every screen, first check whether a later phone rule sets its size again. To change only the phone version, edit the matching setting inside that phone block. Keep its braces `{ }` intact.

If a selector appears multiple times, later rules override earlier ones when both apply. Start with the **EASY DESIGN CONTROLS** block for colors. For other edits, search for the selector and check the final matching rule, including phone blocks. If you're unsure which match is active, tell me the element and the screen size and I can point to the exact setting.

For very small styling edits, you do not need to understand all of CSS. Change one value, refresh, compare, and undo if it looks wrong. For complicated alignment or layout changes, it is safer to describe the result you want and have me update the code.

The display and body font names are the `--display` and `--sans` values at the top of `styles.css`. Fonts are loaded in `index.html`; choosing a completely different font may require updating that font link too.

## Preview your edits

On Windows, open the website folder and double-click `index.html`. If Windows asks what app to use, choose your web browser. If the page is already open, press **Ctrl+R** to refresh; use **Ctrl+F5** for a full refresh after replacing images. Internet is needed for the Google Fonts; the local pictures and page files are in the folder.

For an easy preview of the live repository, download the files together (or clone the repository) so `index.html`, `config.js`, `styles.css`, `script.js` and `assets/` stay together. Do not move one of those files out of its folder.

## Publish your changes so visitors see them

The website is already connected to GitHub Pages and the custom domain. Routine design edits do **not** need any DNS or domain changes.

### If you edit in GitHub in your browser

1. Open the [Greek & All repository](https://github.com/scoobysnackenjoyer/greekandall.com).
2. Open the file you want, such as `config.js` or `styles.css`, and choose the pencil-shaped **Edit** button.
3. Make the small change and use **Preview changes** if GitHub offers it.
4. Choose **Commit changes** and save it on the `main` branch. A commit is GitHub's saved snapshot of your edit.
5. Open the **Actions** tab and wait for **Publish Greek & All website** to finish with a green check.
6. Open [greekandall.com](https://greekandall.com), then press **Ctrl+F5** (or refresh on your phone). Publishing usually takes a short time after the green check.

### If you edit files on your computer

To send local edits to the live site, the folder must be connected to GitHub. The easiest visual app for this is GitHub Desktop:

1. Install GitHub Desktop and sign in to the GitHub account that can edit the website.
2. Choose **File → Clone repository**, select `scoobysnackenjoyer/greekandall.com`, and choose a folder on your computer.
3. Edit files inside that cloned folder. Double-click its `index.html` to preview.
4. In GitHub Desktop, review the list of changed files, write a short summary such as “Update juice image,” and choose **Commit to main**.
5. Choose **Push origin**. This sends your saved edit to GitHub and starts the automatic publishing job.
6. Wait for the green check in the repository's **Actions** tab, then refresh the website.

Downloading a ZIP is useful for looking or previewing, but GitHub Desktop cannot publish edits from a ZIP that is not a cloned repository. If you use a ZIP, you would need to upload the changed files back to GitHub yourself.

GitHub keeps a history of saved versions. If a change looks wrong, restore the earlier version or ask for help before making more changes. Do not change the domain's DNS for normal text, image, or color updates.

## When to ask for coding help

Changing existing words, swapping images, using the color controls, changing an existing item's price, or adjusting a simple size is a basic edit. Ask for coding help when you want a new section, a new kind of customization, a different add-to-cart behavior, a new animation, or a new connection to an ordering service. I can change the code and explain exactly where the new control appears.

The ordering system is not connected yet. A real ordering service, payments, customer database, kitchen tickets, owner alerts and rider notifications need to be selected and connected separately. Do not present this preview checkout as ready to accept an order.
