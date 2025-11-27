# 💱 Currency Converter App

## 🎥 Live Demo

👉 **[View Live Demo](https://teja-janga.github.io/Currency-Converter-App/)**

## Overview

Currency Converter App is a modern, real-time currency conversion tool built with React and Vite. Convert between various currencies instantly with live exchange rates, featuring a beautiful UI with country flags and a responsive design that works seamlessly on all devices.

## Features

✨ **Core Features:**
- 💰 Real-time currency conversion with live exchange rates
- 🌍 Support for 150+ currencies from around the world
- 🚀 Instant conversion as you type
- 🏳️ Country flags displayed for each currency
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Vite and React
- 🎨 Clean, modern and intuitive user interface
- 🔄 Swap currencies with one click
- 📊 Real-time exchange rate data

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS (Custom)
- **API:** Exchange Rate API
- **Storage:** Browser LocalStorage
- **Deployment:** GitHub Pages
- **Assets:** Country flags, currency icons

## Project Structure

```
Currency-Converter-App/
├── src/
│   ├── components/
│   │   ├── CurrencyConverter.jsx
│   │   ├── App.jsx
│   │   └── ...
│   ├── assets/
│   │   └── (images, flags)
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   └── (static files)
├── package.json
├── vite.config.js
└── index.html
```

## Usage

1. **Select Base Currency:** Choose the currency you want to convert from
2. **Enter Amount:** Type the amount you want to convert
3. **Select Target Currency:** Choose the currency to convert to
4. **Instant Conversion:** See the result in real-time
5. **Swap Currencies:** Click the swap button to reverse the conversion
6. **View Rates:** Check the live exchange rate between selected currencies

## How It Works

### Currency Selection
- Browse through 150+ available currencies
- Each currency displays its country flag for easy identification
- See currency codes (USD, EUR, JPY, INR, etc.)

### Real-Time Conversion
- Powered by live exchange rate API
- Conversion updates instantly as you type
- Accurate to multiple decimal places

## Exchange Rate Source

The app fetches real-time exchange rates from a reliable currency exchange API to ensure accurate and up-to-date conversion rates.

## Features in Detail

### Responsive Design
- Mobile-first approach
- Works great on small phones, tablets, and large desktop screens
- Touch-friendly interface for mobile users

### User Experience
- Intuitive currency selection dropdown
- Error messages for API failures
- Loading indicators during data fetch

## Deployment

The app is deployed on GitHub Pages. Any changes pushed to the `main` branch automatically update the live site.

## Environment Variables

If using a custom exchange rate API, configure the API endpoint in the component file:
```javascript
const API_URL = 'your-api-endpoint-here';
const API_KEY = 'your-api-key-here';
```

## Future Enhancements

- 📊 Historical exchange rate charts
- 🔔 Price alerts for currency pairs
- 💾 Conversion history
- 🌙 Dark mode toggle
- 📱 Mobile app version
- 🔗 API for third-party integrations
- 💱 Crypto currency support
- 📈 Advanced analytics

## License

This project is open source and available under the MIT License.

## Author

**Teja Janga**
- GitHub: [@Teja-Janga](https://github.com/Teja-Janga)

## Acknowledgments

- Exchange Rate API for providing real-time data
- React and Vite communities
- All contributors and users
- Flag emoji assets

---

**Made with ❤️ by Teja Janga**
