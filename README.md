# COMING-SOON-PAGE

A React-based "Coming Soon" landing page with countdown timer, background video, and email notification input.

---

## Features

- Countdown timer to a specific launch date
- Background video loop
- Responsive design for desktop and mobile
- Logo and site name fixed at top-left
- Email input placeholder for notifications

---

## Project Structure
 COMING-SOON/
│

├── public/

│ ├── background.mp4 # Background video

│ ├── favicon.ico

│ ├── index.html

│ └── logo.png # Logo image

│

├── src/

│ ├── App.js # Main React app entry

│ ├── ComingSoon.js # Coming Soon component

│ ├── App.css # Styles for the app

│ ├── index.js # ReactDOM rendering

│ └── ...other files

│

├── package.json

├── .gitignore

└── README.md


---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/V-COMING-SOON.git
cd V-COMING-SOON

2. Install dependencies:
npm install

Running the App Locally
Start the development server:
npm start
Open your browser at http://localhost:3000 to see the Coming Soon page.

---

## Customization
Change the target launch date inside src/ComingSoon.js:
// Set the exact date and time for the countdown target
const [targetDate] = useState(() => new Date('2025-06-15T00:00:00'));

// Or set date and time relative to current date/time like:
// const [targetDate] = useState(() => {
//   const now = new Date();
//   now.setDate(now.getDate() + 3); // Set target date 3 days from now
//   now.setHours(now.getHours() + 5); // Add 5 hours to the target time
//   return now;
// });

Replace public/background.mp4 and public/logo.png with your own assets.
