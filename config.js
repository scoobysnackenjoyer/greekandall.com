/*
  EDITABLE CONTENT FOR THE GREEK & ALL PREVIEW
  Change the text, links, image paths, categories and menu here.
  The menu below is demonstration content with sample prices. Replace every
  product, price, description, choice and image before taking real orders.
  Cart and checkout are a local preview only; nothing is sent to the restaurant.
*/
window.SITE_CONFIG = {
  brandName: "Greek & All",
  brandMark: "G&A",
  tagline: "Good food. Big mood.",
  // LOGO REPLACEMENT POINT: put your new logo in assets/ and update this path.
  logoUrl: "assets/greek-and-all-logo.png",
  headline: "Come hungry.\nLeave happy.",
  intro: "Rice and salad bowls, pita pockets, sandwiches, smoothie bowls, smoothies, shakes and little bottles of cold-pressed juice. Come hungry. Leave happy.",
  heroNote: "Good food. Big mood.",
  // IMAGE REPLACEMENT POINT: local files in assets/ are easiest to keep together.
  heroImageUrl: "",
  heroImageAlt: "A relaxed avocado in sunglasses lounges on a beach chair and sips a citrus drink",
  primaryCta: { label: "Get in a good mood", href: "#menu" },
  secondaryCta: { label: "Find your nearest", href: "#visit" },
  menuIntro: "Explore rice and salad bowls, pita pockets, sandwiches, smoothie bowls, smoothies, shakes and fresh cold-pressed juices.",
  menuNote: "Interactive preview · draft menu ideas and prices · checkout does not send orders yet.",
  categories: [
    { id: "rice-bowls", name: "Rice bowls", detail: "A hearty bowl, layered your way.", art: "assets/mascot-rice-bowl.svg", artAlt: "A happy rice bowl waving a tiny flag" },
    { id: "salad-bowls", name: "Salad bowls", detail: "Crisp, colourful and full of life.", art: "assets/mascot-lettuce.svg", artAlt: "An iceberg lettuce getting a workout with dumbbells" },
    { id: "pita-pockets", name: "Pita pockets", detail: "Soft, warm and ready to roll.", art: "assets/mascot-pita.svg", artAlt: "A cheerful pita pocket riding a skateboard" },
    { id: "sandwiches", name: "Sandwiches", detail: "A proper bite for your busy day.", art: "assets/mascot-sandwich.svg", artAlt: "A stacked sandwich wearing cool sunglasses" },
    { id: "smoothie-bowls", name: "Smoothie bowls", detail: "A cool, fruity spoonful of joy.", art: "assets/mascot-smoothie-bowl.svg", artAlt: "A smoothie bowl doing a peaceful yoga pose" },
    { id: "smoothies", name: "Smoothies", detail: "Blend, sip, smile, repeat.", art: "assets/mascot-smoothie.svg", artAlt: "A fruit smoothie on roller skates" },
    { id: "shakes", name: "Shakes", detail: "A creamy little reason to dance.", art: "assets/mascot-shake.svg", artAlt: "A milkshake dancing with a cherry on top" },
    { id: "cold-pressed-juices", name: "Cold-pressed juices", detail: "Fresh juice in a little glass bottle.", art: "assets/mascot-juice.svg", artAlt: "A small glass juice bottle with a lemon slice and a smile" }
  ],
  /*
    SAMPLE MENU — these are invented display items and prices, not your final menu.
    image is the illustration/photo shown on a card and in its item pop-up.
    modifierGroups are required choices; extras are optional paid additions.
  */
  menuItems: [
    { id: "sunshine-rice-bowl", categoryId: "rice-bowls", name: "Greek sunshine bowl", description: "Lemon-herb rice, crunchy cucumber, tomato, greens and a bright house dressing.", price: 299, badge: "Top pick", image: "assets/mascot-rice-bowl.svg", imageAlt: "A cheerful rice bowl illustration", modifierGroups: [{ name: "Choose a protein", required: true, choices: [{ name: "Falafel", price: 0 }, { name: "Paneer", price: 40 }, { name: "Herbed chicken", price: 80 }] }], extras: [{ name: "Extra hummus", price: 30 }, { name: "Avocado", price: 50 }] },
    { id: "garden-rice-bowl", categoryId: "rice-bowls", name: "Garden crunch bowl", description: "Warm grains, roasted seasonal vegetables, seeds and a cooling yoghurt dip.", price: 279, image: "assets/mascot-rice-bowl.svg", imageAlt: "A happy rice bowl illustration", modifierGroups: [{ name: "Choose your base", required: true, choices: [{ name: "Herbed rice", price: 0 }, { name: "Greens", price: 0 }] }], extras: [{ name: "Extra feta", price: 35 }] },
    { id: "crunchy-garden-salad", categoryId: "salad-bowls", name: "Crunchy garden salad", description: "Crisp leaves, cucumber, tomato, pickled onion and lemon dressing.", price: 259, badge: "Fresh favourite", image: "assets/mascot-lettuce.svg", imageAlt: "A lettuce mascot lifting weights", modifierGroups: [{ name: "Choose a protein", required: true, choices: [{ name: "Chickpeas", price: 0 }, { name: "Paneer", price: 40 }, { name: "Herbed chicken", price: 80 }] }], extras: [{ name: "Toasted seeds", price: 20 }, { name: "Extra feta", price: 35 }] },
    { id: "roasted-pumpkin-salad", categoryId: "salad-bowls", name: "Roasted pumpkin salad", description: "Sweet roasted pumpkin, greens, crunchy seeds and a tangy dressing.", price: 269, image: "assets/mascot-lettuce.svg", imageAlt: "A lettuce mascot lifting weights", modifierGroups: [], extras: [{ name: "Add avocado", price: 50 }] },
    { id: "falafel-pita-pocket", categoryId: "pita-pockets", name: "Falafel pita pocket", description: "Warm pita, crisp falafel, chopped salad and creamy tahini.", price: 229, badge: "Top pick", image: "assets/mascot-pita.svg", imageAlt: "A pita pocket riding a skateboard", modifierGroups: [{ name: "Choose your sauce", required: true, choices: [{ name: "Classic tahini", price: 0 }, { name: "Herby yoghurt", price: 0 }, { name: "Spicy harissa", price: 0 }] }], extras: [{ name: "Extra falafel", price: 45 }] },
    { id: "grilled-paneer-pita", categoryId: "pita-pockets", name: "Grilled paneer pita", description: "Soft pita filled with warm paneer, crunchy greens and mint yoghurt.", price: 249, image: "assets/mascot-pita.svg", imageAlt: "A pita pocket riding a skateboard", modifierGroups: [], extras: [{ name: "Extra paneer", price: 50 }, { name: "Add avocado", price: 50 }] },
    { id: "club-sandwich", categoryId: "sandwiches", name: "Sunny club sandwich", description: "Toasted layers with crunchy vegetables, greens and a creamy house spread.", price: 239, image: "assets/mascot-sandwich.svg", imageAlt: "A cool sandwich mascot", modifierGroups: [{ name: "Choose your filling", required: true, choices: [{ name: "Veggie crunch", price: 0 }, { name: "Paneer tikka", price: 40 }, { name: "Herbed chicken", price: 80 }] }], extras: [{ name: "Add cheese", price: 30 }] },
    { id: "avocado-halloumi-sandwich", categoryId: "sandwiches", name: "Avocado & halloumi toastie", description: "Golden toasted bread with avocado, grilled cheese and bright greens.", price: 289, badge: "Top pick", image: "assets/mascot-sandwich.svg", imageAlt: "A cool sandwich mascot", modifierGroups: [], extras: [{ name: "Extra halloumi", price: 55 }] },
    { id: "berry-smoothie-bowl", categoryId: "smoothie-bowls", name: "Berry happy bowl", description: "A thick berry blend topped with banana, seeds and a little crunch.", price: 299, image: "assets/mascot-smoothie-bowl.svg", imageAlt: "A smoothie bowl doing yoga", modifierGroups: [{ name: "Choose a topping", required: true, choices: [{ name: "Granola", price: 0 }, { name: "Coconut flakes", price: 0 }, { name: "Extra berries", price: 35 }] }], extras: [{ name: "Add peanut butter", price: 30 }] },
    { id: "mango-smoothie-bowl", categoryId: "smoothie-bowls", name: "Mango sunshine bowl", description: "Mango, banana and yoghurt topped with coconut and toasted seeds.", price: 279, image: "assets/mascot-smoothie-bowl.svg", imageAlt: "A smoothie bowl doing yoga", modifierGroups: [], extras: [{ name: "Add granola", price: 25 }] },
    { id: "berry-blast-smoothie", categoryId: "smoothies", name: "Berry blast smoothie", description: "A bright blend of berries, banana and yoghurt. Blended fresh.", price: 189, badge: "Top pick", image: "assets/mascot-smoothie.svg", imageAlt: "A smoothie on roller skates", modifierGroups: [{ name: "Choose a size", required: true, choices: [{ name: "Regular", price: 0 }, { name: "Large", price: 40 }] }], extras: [{ name: "Add protein", price: 45 }] },
    { id: "mango-mint-smoothie", categoryId: "smoothies", name: "Mango mint smoothie", description: "Mango and banana with a cool little minty finish.", price: 179, image: "assets/mascot-smoothie.svg", imageAlt: "A smoothie on roller skates", modifierGroups: [{ name: "Choose a size", required: true, choices: [{ name: "Regular", price: 0 }, { name: "Large", price: 40 }] }], extras: [] },
    { id: "chocolate-date-shake", categoryId: "shakes", name: "Chocolate date shake", description: "A creamy cocoa shake sweetened with dates.", price: 199, image: "assets/mascot-shake.svg", imageAlt: "A dancing milkshake mascot", modifierGroups: [{ name: "Choose a size", required: true, choices: [{ name: "Regular", price: 0 }, { name: "Large", price: 45 }] }], extras: [{ name: "Add whipped cream", price: 25 }] },
    { id: "banana-peanut-shake", categoryId: "shakes", name: "Banana peanut shake", description: "Banana, peanut butter and a creamy, chilled blend.", price: 199, image: "assets/mascot-shake.svg", imageAlt: "A dancing milkshake mascot", modifierGroups: [], extras: [{ name: "Add protein", price: 45 }] },
    { id: "citrus-zing-juice", categoryId: "cold-pressed-juices", name: "Citrus zing", description: "A zippy orange, carrot and ginger blend in a small glass bottle.", price: 149, image: "assets/mascot-juice.svg", imageAlt: "A small juice bottle mascot", modifierGroups: [{ name: "Choose bottle size", required: true, choices: [{ name: "250 ml", price: 0 }, { name: "350 ml", price: 40 }] }], extras: [] },
    { id: "ruby-garden-juice", categoryId: "cold-pressed-juices", name: "Ruby garden juice", description: "Beetroot, apple and lemon, freshly pressed into a little bottle.", price: 149, image: "assets/mascot-juice.svg", imageAlt: "A small juice bottle mascot", modifierGroups: [], extras: [] }
  ],
  juiceHeadline: "Sip happy. Feel sunny.",
  juiceText: "Fresh cold-pressed juices in little glass bottles.",
  ourWayText: "No sad salads. No boring bowls. Just Greek-inspired food, big flavour and a little fun in every bite.",
  locationText: "Come hungry. Leave happy. Find us in your neighbourhood soon.",
  location: "Your neighbourhood, your city",
  locationLink: "",
  hours: "Hours and opening details coming soon",
  footerLine: "Good food. Big mood. Come hungry. Leave happy."
};
