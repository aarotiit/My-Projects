# Pannukakku-tilaus (Pancake Order App)

A small, two-page web app to configure a pancake, see a live price, confirm an order, and manage orders—all in the browser with `localStorage`.

## What Was Built (Step-by-Step)

1. **UI markup:**  
   `index.html` creates a split layout with a product image, a circular **live price badge**, and a form to choose pancake type, toppings, extras, and delivery method (Finnish labels). It also includes buttons to preview and confirm the order, plus a link to the orders page.

2. **Styling & layout:**  
   `style.css` applies a full-height two-column design, background image on the form, animated price “bounce,” and accessible controls. It also styles the summary card and action buttons.

3. **Interactivity & pricing:**  
   `script.js` watches form changes, recalculates total price from the selected type, toppings, extras, and delivery, updates both price displays, builds a readable **order summary**, and persists confirmed orders to `localStorage` with a timestamp and default status.

4. **Orders dashboard:**  
   `tilaukset.html` loads a grid of all saved orders. Each card shows customer details, selections, total price, and a **status dropdown** that updates the order in `localStorage`. The page is styled via `kokki.css` and powered by `kokki.js`.

## Technologies

- **HTML5** for structure (two pages, semantic sections).
- **CSS3** for responsive layout, animations, and components.
- **Vanilla JavaScript** for pricing logic, summaries, state, and status updates using `localStorage`.
- **Google Fonts (Fredoka)** for typography.

## Getting Started

1. Download/clone the project.
2. Open `index.html` in any modern browser to place orders.
3. Click **“Kaikki tilaukset”** or open `tilaukset.html` to view/manage orders.

> No build tools or backend required.

## Project Structure

.
├─ index.html # Order builder (live price & summary)
├─ tilaukset.html # Orders dashboard
├─ style.css # Layout, components, animations
├─ kokki.css # Dashboard styles
├─ script.js # Pricing, summary, save to localStorage
├─ kokki.js # Render & update orders from localStorage
└─ images/
├─ pancake.jpeg
└─ pannukakkukuva.png

Made By Aaro Tiitinen
