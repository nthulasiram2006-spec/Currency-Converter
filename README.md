# 💱 Currency Converter

A real-time **Currency Converter** built using **HTML5**, **CSS3**, and **JavaScript**. Convert between 150+ currencies with live exchange rates fetched from a public API, along with dynamic country flags and instant conversion results.

---

## 📸 Preview

The project includes the following sections:

- 💰 **Amount Input** – Enter the amount to convert
- 🔽 **Currency Dropdowns** – Select "From" and "To" currencies with country flags
- 🔄 **Swap Icon** – Visual indicator between the two currencies
- 💬 **Conversion Message** – Displays the live converted amount
- 🔘 **Convert Button** – Fetches and shows the latest exchange rate

---

## 🛠️ Tech Stack

| 🧰 Technology | 🎯 Purpose |
|------------|---------|
| 📄 HTML5 | Page structure and layout |
| 🎨 CSS3 | Styling, Flexbox layout, and responsive design |
| ⚡ JavaScript | Fetch API, DOM manipulation, and exchange rate logic |
| 🌐 Currency API | Live exchange rate data (`@fawazahmed0/currency-api`) |
| 🏳️ Flags API | Dynamic country flag images (`flagsapi.com`) |
| ⭐ Font Awesome | Icons (swap arrow icon) |

---

## 📁 Project Structure

```
📦 Currency-Converter/
│
├── 📄 index.html     # Main HTML file
├── 🎨 style.css      # Stylesheet for the converter
├── ⚡ app.js         # Main JavaScript logic (API + conversion)
└── 🗂️ code.js        # Country list mapping (currency → country code)
```

---

## ✨ Features

- 🌍 Supports **150+ currencies** worldwide
- 🔄 Real-time exchange rate fetching via public API
- 🏳️ Dynamic country flags that update on currency change
- 💰 Amount validation (defaults to 1 if empty or less than 1)
- 💬 Live conversion result displayed in a styled message box
- ⚡ Auto-converts on page load (default: USD → INR)
- 🎨 Clean, centered UI with a soft pastel color palette
- 📱 Fully responsive layout using Flexbox

---

## 🎨 Customization

You can easily customize:

- 🎨 **Colors** – Modify background colors in `style.css` (e.g., `#f4e4ba`, `#af4d98`, `lightgreen`)
- 🌍 **Default Currencies** – Change `"USD"` and `"INR"` in `app.js` to set different defaults
- 💱 **API Source** – Replace the `URL` constant in `app.js` with any other exchange rate API
- 🏳️ **Flag Style** – Change the flag size in the URL (e.g., `/flat/64.png` → `/flat/128.png`)
- 🔤 **Fonts** – Modify font-family in `style.css` under `.Msg`
- 📐 **Container Size** – Adjust `.Container` width and height in `style.css`

---

## ⚠️ Disclaimer

This project is created **for educational and learning purposes only** 📚. Exchange rates are fetched from a free public API and may not be 100% accurate for financial decisions. This project is not affiliated with any brand or financial institution.

---

## 📌 Future Improvements

- 🔄 Add a **swap button** to quickly reverse From/To currencies
- 📊 Show historical exchange rate charts
- 💾 Cache recent conversions using `localStorage`
- 🌙 Add a dark mode toggle
- 🔊 Add sound feedback on conversion
- ⚠️ Better error handling with retry mechanism
- 📱 Improve mobile responsiveness further

---

## 👨‍💻 Author

**Thulasi Ram N** |  
Front-End Developer | Learner
