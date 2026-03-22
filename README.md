# 💍 SafePay – Wearable Payment Control App

A premium fintech mobile UI for controlling smart rings and smartwatch payments.  
Built with vanilla HTML, CSS, and JavaScript. No frameworks. No dependencies.

![SafePay Preview](https://img.shields.io/badge/UI-Mobile%20First-00AEEF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📱 Screens

| File | Screen |
|------|--------|
| `screens/onboarding.html` | Onboarding + Biometric Auth + OTP |
| `screens/dashboard.html` | Home Dashboard |
| `screens/devices.html` | Device Management |
| `screens/cards.html` | Card Management |
| `screens/analytics.html` | Transactions & Analytics |
| `screens/security.html` | Security Center |
| `screens/settings.html` | Settings & Profile |

---

## 🗂 Project Structure

```
safepay/
├── index.html              ← Entry point (loads dashboard)
├── README.md
├── css/
│   ├── variables.css       ← Design tokens & CSS variables
│   ├── base.css            ← Reset, typography, global styles
│   └── components.css      ← Reusable UI components
├── js/
│   └── nav.js              ← Navigation & shared interactions
└── screens/
    ├── onboarding.html
    ├── dashboard.html
    ├── devices.html
    ├── cards.html
    ├── analytics.html
    ├── security.html
    └── settings.html
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/safepay.git

# Open in browser
open safepay/index.html

# Or serve locally
npx serve safepay
# or
python3 -m http.server 3000 --directory safepay
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0A0A0A` |
| Surface | `#111114` |
| Card | `#16161A` |
| Electric Blue | `#00AEEF` |
| Success Green | `#00E5A0` |
| Alert Red | `#FF3D6B` |
| Gold | `#FFB547` |
| Font (Display) | Syne |
| Font (Body) | DM Sans |

---

## 📲 Mobile Optimized

- Designed for **390×844px** (iPhone 14 Pro)
- Touch-friendly tap targets (min 44px)
- Bottom navigation bar for thumb reach
- Smooth CSS transitions throughout

---

## 📄 License

MIT © 2026 SafePay
