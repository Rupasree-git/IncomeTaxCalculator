# Income Tax Calculator (JavaScript)

This project is a simple income tax calculator built using JavaScript. The user enters their annual income, and the script calculates the total tax payable based on different income slabs.

## How It Works
1. User enters their income in the form.
2. JavaScript prevents the page from reloading using e.preventDefault().
3. The program checks the income against multiple tax slabs.
4. The correct tax amount is calculated using:
   - 0% tax for income up to 12,00,000
   - 15% tax for income between 12,00,000 and 16,00,000
   - 20% tax for income between 16,00,000 and 20,00,000
   - 25% tax for income between 20,00,000 and 24,00,000
   - 30% tax for income above 24,00,000
5. The total tax is displayed on the screen.
6. The form resets after each calculation.

## Features
- Simple and beginner-friendly logic
- Uses conditional statements to handle tax slabs
- Displays tax result instantly without page reload
- Clean and easy-to-modify JavaScript code

