# Age Calculator

A clean and interactive web app for calculating your exact age in **years, months, and days**.  
Simply enter your date of birth, and the app validates the input and instantly provides results.

## Features

- 📅 Input fields for **day, month, and year**
- ✅ Real-time **validation** with error messages for invalid or missing dates
- 🎯 Calculates exact age down to **years, months, and days**
- ⚡ Keyboard support – press **Enter** to calculate quickly
- 📱 Responsive design, works on both desktop and mobile

## Technologies Used

- **HTML5** – Structure of the calculator and form elements
- **CSS3** – Modern styling with responsive layout and hover/focus effects
- **Vanilla JavaScript** – Handles input validation, error messages, and age calculation logic

## How It Works

1. Users provide a valid day, month, and year of birth.
2. JavaScript checks for:
   - Empty fields
   - Invalid dates (e.g., February 30)
   - Future dates
3. If valid, the app calculates the difference between today’s date and the birthdate.
4. The result is displayed as **years, months, and days**.

## Installation & Usage

1. Clone or download this repository:

   ```bash
   git clone https://github.com/your-username/age-calculator.git
   Open the project folder.

   ```

2. Launch index.html in your browser.

3. Enter your birth date and click the purple arrow button (or press Enter).

4. That’s it — no external libraries or dependencies required.

## File Structure

```bash
Copy code
.
├── index.html   # Main layout and input fields
├── style.css    # Styling, responsive design, and animations
└── script.js    # Validation, age calculation, and interactivity
```

### Future Improvements

- Support for multiple languages

- Option to calculate age in weeks, hours, or minutes

- Dark mode theme

- Improved accessibility with screen reader support

Made By Aaro Tiitinen
