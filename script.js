(() => {
  const config = window.SITE_CONFIG || {};
  const products = Array.isArray(config.menuItems) ? config.menuItems : [];
  const categories = Array.isArray(config.categories) ? config.categories : [];
  const storageKey = "greek-and-all-preview-cart-v1";
  let activeCategory = "all";
  let cart = loadCart();

  const byId = (id) => document.getElementById(id);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const money = (amount) => `₹${Number(amount || 0).toLocaleString("en-IN")}`;

  // Subtle scroll reveals. The stylesheet keeps everything visible when reduced motion is preferred.
  let revealObserver = null;
  const revealGroups = [
    [".hero-copy", "left", false],
    [".hero-art", "right", false],
    [".section-heading", "up", false],
    [".preview-notice", "up", false],
    [".menu-card", "up", true],
    [".menu-footnote", "up", false],
    [".products-heading", "up", false],
    [".category-filters", "up", false],
    [".product-card", "up", true],
    [".juice-art", "left", false],
    [".juice-copy", "right", false],
    [".way-visual", "left", false],
    [".way-copy", "right", false],
    [".visit-copy-block", "left", false],
    [".visit-card", "right", false],
    [".footer-inner", "up", false]
  ];

  function initScrollReveals() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof window.IntersectionObserver !== "function") return;

    const targets = [];
    revealGroups.forEach(([selector, direction, stagger]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.dataset.reveal = direction;
        if (stagger) {
          element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 75}ms`);
        }
        targets.push({ element, stagger });
      });
    });
    if (!targets.length) return;

    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
        const delay = parseFloat(getComputedStyle(entry.target).getPropertyValue("--reveal-delay")) || 0;
        if (delay) window.setTimeout(() => entry.target.style.removeProperty("--reveal-delay"), 850 + delay);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

    document.documentElement.classList.add("has-scroll-reveal");
    targets.forEach(({ element }) => revealObserver.observe(element));
  }

  function registerProductReveals() {
    const grid = byId("product-grid");
    if (!grid || !revealObserver || !document.documentElement.classList.contains("has-scroll-reveal")) return;
    grid.querySelectorAll(".product-card").forEach((card, index) => {
      card.dataset.reveal = "up";
      card.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 75}ms`);
      revealObserver.observe(card);
    });
  }

  function setText(key, value) {
    if (typeof value !== "string") return;
    document.querySelectorAll(`[data-config="${key}"]`).forEach((node) => { node.textContent = value; });
  }

  Object.entries(config).forEach(([key, value]) => { if (typeof value === "string") setText(key, value); });
  document.title = `${config.brandName || "Greek & All"} — ${config.tagline || "Good food. Big mood."}`;
  document.querySelectorAll(".brand").forEach((brand) => brand.setAttribute("aria-label", `${config.brandName || "Greek & All"} home`));

  if (typeof config.logoUrl === "string" && config.logoUrl.trim()) {
    document.querySelectorAll(".brand-logo").forEach((logo) => {
      logo.src = config.logoUrl.trim();
      logo.addEventListener("error", () => { logo.src = "assets/greek-and-all-logo.png"; }, { once: true });
    });
  }

  if (config.headline) {
    const headline = document.querySelector("h1[data-config='headline']");
    const lines = config.headline.split("\n");
    headline.replaceChildren(document.createTextNode(lines[0] || ""));
    if (lines.length > 1) {
      headline.append(document.createElement("br"));
      const emphasis = make("em", "", lines.slice(1).join(" "));
      headline.append(emphasis);
    }
  }

  ["primaryCta", "secondaryCta", "juiceCta", "locationLink"].forEach((key) => {
    const value = config[key];
    if (!value) return;
    document.querySelectorAll(`[data-link="${key}"]`).forEach((link) => {
      if (typeof value === "object") {
        link.href = value.href || "#";
        if (value.label) {
          const arrow = link.querySelector("span[aria-hidden='true']");
          link.textContent = value.label + " ";
          if (arrow) link.append(arrow);
        }
      } else if (typeof value === "string" && value.trim()) link.href = value;
    });
  });

  const heroImage = byId("hero-image");
  if (heroImage) {
    heroImage.alt = config.heroImageAlt || "Fresh food from Greek & All";
    if (config.heroImageUrl && config.heroImageUrl.trim()) {
      heroImage.src = config.heroImageUrl.trim();
      heroImage.addEventListener("error", () => { heroImage.src = "assets/hero-avocado-beach.svg"; }, { once: true });
    }
  }

  function renderCategories() {
    const grid = byId("menu-grid");
    if (!grid) return;
    categories.forEach((item, index) => {
      const card = make("button", "menu-card category-card");
      card.type = "button";
      card.dataset.categoryId = item.id;
      card.setAttribute("aria-label", `Browse ${item.name}`);
      card.style.setProperty("--card-tone", ["#F15B45", "#F4A3B8", "#8FD8F5", "#A8B83F", "#31543B"][index % 5]);
      if (item.art) {
        const art = make("img", "menu-mascot");
        art.src = item.art;
        art.alt = item.artAlt || "A playful food character";
        art.loading = "lazy";
        card.append(art);
      }
      card.append(make("h3", "", item.name || "Menu category"), make("p", "", item.detail || "Made fresh, just for you."));
      const action = make("span", "category-action", "Shop category ↗");
      card.append(action);
      grid.append(card);
    });

    const filters = byId("category-filters");
    const all = make("button", "category-filter is-active", "All items");
    all.type = "button";
    all.dataset.filterCategory = "all";
    filters.append(all);
    categories.forEach((item) => {
      const button = make("button", "category-filter", item.name);
      button.type = "button";
      button.dataset.filterCategory = item.id;
      filters.append(button);
    });
  }

  function categoryName(id) {
    return categories.find((item) => item.id === id)?.name || "Menu favourite";
  }

  function visibleProducts() {
    return activeCategory === "all" ? products : products.filter((product) => product.categoryId === activeCategory);
  }

  function renderProducts() {
    const grid = byId("product-grid");
    const heading = byId("products-title");
    if (revealObserver) grid.querySelectorAll(".product-card").forEach((card) => revealObserver.unobserve(card));
    grid.replaceChildren();
    const current = visibleProducts();
    heading.textContent = activeCategory === "all" ? "Our menu." : `${categoryName(activeCategory)}.`;

    current.forEach((product) => {
      const card = make("article", "product-card");
      const open = make("button", "product-open");
      open.type = "button";
      open.dataset.openProduct = product.id;
      open.setAttribute("aria-label", `View ${product.name}, ${money(product.price)}`);
      const imageFrame = make("span", "product-image-frame");
      if (product.badge) imageFrame.append(make("span", "product-badge", product.badge));
      const image = make("img", "product-image");
      image.src = product.image || "assets/hero-avocado-beach.svg";
      image.alt = product.imageAlt || product.name;
      image.loading = "lazy";
      imageFrame.append(image);
      const body = make("span", "product-card-copy");
      body.append(make("span", "product-category", categoryName(product.categoryId)), make("strong", "product-name", product.name), make("span", "product-description", product.description));
      open.append(imageFrame, body);
      const footer = make("div", "product-card-footer");
      footer.append(make("strong", "product-price", money(product.price)));
      const add = make("button", "quick-add", "+ Add");
      add.type = "button";
      add.dataset.quickAdd = product.id;
      add.setAttribute("aria-label", `Quick add ${product.name}`);
      footer.append(add);
      card.append(open, footer);
      grid.append(card);
    });
    if (!current.length) grid.append(make("p", "empty-products", "No items in this category yet."));
    registerProductReveals();
  }

  function setCategory(id) {
    activeCategory = id;
    document.querySelectorAll("[data-filter-category]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filterCategory === id);
    });
    renderProducts();
  }

  function optionField(group, index) {
    const field = make("fieldset", "option-group");
    const legend = make("legend", "", group.name);
    field.append(legend);
    group.choices.forEach((choice, choiceIndex) => {
      const label = make("label", "choice-row");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `modifier-${index}`;
      input.value = String(choiceIndex);
      input.required = Boolean(group.required);
      if (choiceIndex === 0) input.checked = true;
      const choiceText = make("span", "choice-name", choice.name);
      const price = make("span", "choice-price", Number(choice.price) > 0 ? `+${money(choice.price)}` : "Included");
      label.append(input, choiceText, price);
      field.append(label);
    });
    return field;
  }

  function openProduct(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    const dialog = byId("product-dialog");
    const content = byId("product-dialog-content");
    content.replaceChildren();

    const layout = make("div", "product-dialog-layout");
    const image = make("img", "dialog-product-image");
    image.src = product.image || "assets/hero-avocado-beach.svg";
    image.alt = product.imageAlt || product.name;
    const body = make("div", "dialog-product-copy");
    const dialogTitle = make("h2", "", product.name);
    dialogTitle.id = "product-dialog-title";
    body.append(make("p", "eyebrow", categoryName(product.categoryId)), dialogTitle, make("p", "dialog-product-description", product.description));
    const form = make("form", "product-options-form");
    form.dataset.productId = product.id;
    (product.modifierGroups || []).forEach((group, index) => form.append(optionField(group, index)));

    if ((product.extras || []).length) {
      const extras = make("fieldset", "option-group");
      extras.append(make("legend", "", "Add a little extra (optional)"));
      product.extras.forEach((extra, index) => {
        const label = make("label", "choice-row");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "extras";
        input.value = String(index);
        const extraName = make("span", "choice-name", extra.name);
        const extraPrice = make("span", "choice-price", `+${money(extra.price)}`);
        label.append(input, extraName, extraPrice);
        extras.append(label);
      });
      form.append(extras);
    }

    const actions = make("div", "product-form-actions");
    const quantityLabel = make("label", "quantity-picker");
    quantityLabel.append(make("span", "", "Qty"));
    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.name = "quantity";
    quantity.min = "1";
    quantity.max = "20";
    quantity.value = "1";
    quantityLabel.append(quantity);
    const submit = make("button", "button button-primary", `Add to bag · ${money(product.price)}`);
    submit.type = "submit";
    actions.append(quantityLabel, submit);
    form.append(actions);
    const updatePrice = () => {
      const data = new FormData(form);
      const selectedModifiers = (product.modifierGroups || []).reduce((sum, group, groupIndex) => {
        const selected = group.choices[Number(data.get(`modifier-${groupIndex}`) || 0)];
        return sum + Number(selected?.price || 0);
      }, 0);
      const selectedExtras = (product.extras || []).reduce((sum, extra, extraIndex) => {
        return sum + (data.getAll("extras").includes(String(extraIndex)) ? Number(extra.price || 0) : 0);
      }, 0);
      const quantityValue = Math.max(1, Math.min(20, Number(data.get("quantity") || 1)));
      submit.textContent = `Add to bag · ${money((Number(product.price) + selectedModifiers + selectedExtras) * quantityValue)}`;
    };
    form.addEventListener("change", updatePrice);
    form.addEventListener("input", updatePrice);
    body.append(form);
    layout.append(image, body);
    content.append(layout);
    if (!dialog.open) dialog.showModal();
  }

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(saved) ? saved.filter((item) => item && typeof item.productId === "string") : [];
    } catch (_) { return []; }
  }

  function saveCart() {
    try { localStorage.setItem(storageKey, JSON.stringify(cart)); } catch (_) { /* The cart still works until this tab closes. */ }
  }

  function cartCount() { return cart.reduce((sum, item) => sum + item.quantity, 0); }
  function cartSubtotal() { return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0); }

  function addToCart(product, selections, extras, quantity, showBag = true) {
    const key = JSON.stringify([product.id, selections.map((item) => item.name), extras.map((item) => item.name)]);
    const unitPrice = Number(product.price) + selections.reduce((sum, item) => sum + Number(item.price || 0), 0) + extras.reduce((sum, item) => sum + Number(item.price || 0), 0);
    const existing = cart.find((item) => item.key === key);
    if (existing) existing.quantity = Math.min(20, existing.quantity + quantity);
    else cart.push({ key, productId: product.id, quantity, unitPrice, selections, extras });
    saveCart();
    renderCart();
    if (showBag) openCart();
  }

  function renderCart() {
    const count = cartCount();
    byId("cart-count").textContent = String(count);
    byId("cart-count").setAttribute("aria-label", `${count} ${count === 1 ? "item" : "items"} in bag`);
    byId("cart-empty").hidden = cart.length > 0;
    byId("cart-content").hidden = cart.length === 0;
    byId("cart-lines").replaceChildren();
    byId("cart-subtotal").textContent = money(cartSubtotal());
    byId("demo-result").hidden = true;

    cart.forEach((line, index) => {
      const product = products.find((item) => item.id === line.productId);
      if (!product) return;
      const row = make("article", "cart-line");
      const image = make("img", "cart-line-image");
      image.src = product.image || "assets/hero-avocado-beach.svg";
      image.alt = product.imageAlt || "";
      const body = make("div", "cart-line-copy");
      body.append(make("strong", "", product.name));
      const details = [...(line.selections || []).map((item) => item.name), ...(line.extras || []).map((item) => `+ ${item.name}`)];
      if (details.length) body.append(make("p", "cart-line-options", details.join(" · ")));
      body.append(make("strong", "cart-line-price", money(line.unitPrice * line.quantity)));
      const controls = make("div", "cart-quantity");
      const minus = make("button", "quantity-button", "−");
      minus.type = "button";
      minus.dataset.cartAction = "minus";
      minus.dataset.cartIndex = String(index);
      minus.setAttribute("aria-label", `Remove one ${product.name}`);
      const quantity = make("span", "", String(line.quantity));
      const plus = make("button", "quantity-button", "+");
      plus.type = "button";
      plus.dataset.cartAction = "plus";
      plus.dataset.cartIndex = String(index);
      plus.setAttribute("aria-label", `Add one ${product.name}`);
      const remove = make("button", "remove-line", "Remove");
      remove.type = "button";
      remove.dataset.cartAction = "remove";
      remove.dataset.cartIndex = String(index);
      controls.append(minus, quantity, plus, remove);
      row.append(image, body, controls);
      byId("cart-lines").append(row);
    });
  }

  function openCart() {
    const dialog = byId("cart-dialog");
    if (!dialog.open) dialog.showModal();
  }

  renderCategories();
  renderProducts();
  renderCart();
  initScrollReveals();

  document.addEventListener("click", (event) => {
    const categoryCard = event.target.closest("[data-category-id]");
    if (categoryCard) {
      setCategory(categoryCard.dataset.categoryId);
      byId("menu-items").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const filter = event.target.closest("[data-filter-category]");
    if (filter) setCategory(filter.dataset.filterCategory);
    const open = event.target.closest("[data-open-product]");
    if (open) openProduct(open.dataset.openProduct);
    const quick = event.target.closest("[data-quick-add]");
    if (quick) {
      const product = products.find((item) => item.id === quick.dataset.quickAdd);
      const hasCustomOptions = product && ((product.modifierGroups || []).length > 0 || (product.extras || []).length > 0);
      if (product && hasCustomOptions) openProduct(product.id);
      else if (product) {
        addToCart(product, [], [], 1, false);
        const originalText = quick.textContent;
        quick.textContent = "Added ✓";
        quick.setAttribute("aria-label", `Added ${product.name} to your bag`);
        window.setTimeout(() => {
          quick.textContent = originalText;
          quick.setAttribute("aria-label", `Quick add ${product.name}`);
        }, 1400);
      }
    }
  });

  byId("product-dialog-content").addEventListener("submit", (event) => {
    const form = event.target.closest(".product-options-form");
    if (!form) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const product = products.find((item) => item.id === form.dataset.productId);
    if (!product) return;
    const formData = new FormData(form);
    const selections = (product.modifierGroups || []).map((group, index) => {
      const choiceIndex = Number(formData.get(`modifier-${index}`) || 0);
      return group.choices[choiceIndex];
    }).filter(Boolean);
    const extras = (product.extras || []).filter((_, index) => (formData.getAll("extras") || []).includes(String(index)));
    const quantity = Math.max(1, Math.min(20, Number(formData.get("quantity") || 1)));
    byId("product-dialog").close();
    addToCart(product, selections, extras, quantity);
  });

  byId("open-cart").addEventListener("click", openCart);
  byId("close-cart-dialog").addEventListener("click", () => byId("cart-dialog").close());
  byId("close-product-dialog").addEventListener("click", () => byId("product-dialog").close());
  byId("continue-shopping").addEventListener("click", () => {
    byId("cart-dialog").close();
    byId("menu-items").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  byId("cart-lines").addEventListener("click", (event) => {
    const action = event.target.closest("[data-cart-action]");
    if (!action) return;
    const index = Number(action.dataset.cartIndex);
    const line = cart[index];
    if (!line) return;
    if (action.dataset.cartAction === "plus") line.quantity = Math.min(20, line.quantity + 1);
    if (action.dataset.cartAction === "minus") line.quantity -= 1;
    if (action.dataset.cartAction === "remove" || line.quantity <= 0) cart.splice(index, 1);
    saveCart();
    renderCart();
  });

  byId("checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const result = byId("demo-result");
    result.textContent = "Preview complete: no order was placed and none of these details were sent or saved. A real ordering service still needs to be connected.";
    result.hidden = false;
  });

  const locationLink = document.querySelector('[data-link="locationLink"]');
  if (locationLink && config.locationLink && config.locationLink.trim()) {
    locationLink.href = config.locationLink.trim();
    locationLink.target = "_blank";
    locationLink.rel = "noopener noreferrer";
  } else if (locationLink) {
    locationLink.href = "#visit";
    locationLink.textContent = "Directions coming soon";
  }

  byId("year").textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = byId("main-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }));
})();
