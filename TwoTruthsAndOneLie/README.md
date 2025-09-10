# Two Truths and a Lie

A simple web app for playing the classic icebreaker game **Two Truths and a Lie**.  
The app allows you to present statements, then toggle the answers to reveal which ones are true or false.

## Features

- 🎲 Interactive **Two Truths and a Lie** game format
- 👀 Button to **show or hide answers** dynamically
- 🖥️ Minimal, browser-based app (no installation required)
- 📱 Works on both desktop and mobile browsers

## Technologies Used

- **HTML5** – Provides the structure for displaying statements and the toggle button
- **CSS3** _(optional, if included)_ – Styling and layout adjustments
- **JavaScript (Vanilla JS)** – Handles interactivity (show/hide answers)

## How It Works

1. The page displays a set of statements (two truths and one lie).
2. A button (`Show Answers / Hide Answers`) lets players reveal or hide the correct answers.
3. The logic is handled in `script.js` using DOM manipulation:
   - Tracks the button state
   - Toggles visibility of the answers section

## Installation & Usage

1. Clone or download the repository:

   ```bash
   git clone https://github.com/your-username/two-truths-lie.git
   Open the project folder.
   ```

2. Launch index.html in your browser.

3. Click the Show Answers button to reveal the correct answers, and toggle back to hide them again.

4. That’s it — no extra setup or dependencies are required.

## File Structure

```bash
.
├── index.html # Game layout and content
├── script.js # Toggle functionality (show/hide answers)
└── style.css # (Optional) Styling for layout and visuals
```

Future Improvements

- Allow users to input their own truths and lies

- Randomize order of statements

- Add scoring to track correct guesses

- Improve UI with animations or themes
