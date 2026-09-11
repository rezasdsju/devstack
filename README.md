# DevStack

DevStack is a project where users can choose their development stack by selecting technologies, and can remove selected technologies from their stack.

## Live Demo

[https://devstack-kqth6yy32-reza-babd.vercel.app](https://devstack-566l3w0jx-reza-babd.vercel.app)

## Features

- Browse and explore technologies across different categories
- Add a technology to your stack
- Remove a technology from your stack
- "Add to Stack" button is disabled once a technology is added
- Button is re-enabled automatically when the technology is removed from the selected stack
- Remove all selected technologies at once with a single "Remove All" action
- Toast notifications for add, remove, and remove-all actions
- Fully responsive design across Navbar, Banner, Technologies, and Footer sections

## Tech Stack

- TypeScript
- React
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON (for technology data)
- Vite (build tool)

## Project Structure

```
devstack/
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hero.png
│   │   ├── logo-text.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   └── technologies/
│   │       ├── Technologies.tsx
│   │       ├── selectedTechnologies/
│   │       │   └── SelectedTechnologiesCard.tsx
│   │       └── technologiesCard/
│   │           └── TechnologiesCard.tsx
│   └── types/
│       └── technologiesTypes.ts
└── node_modules/
```

## Data

Technology data is stored in `public/data.json` and typed using the `TechnologiesType` interface defined in `src/types/technologiesTypes.ts`:

```ts
export interface TechnologiesType {
    "id": string,
    "name": string,
    "category": string,
    "description": string,
    "icon": string,
    "rating": number,
    "difficulty": string,
    "badge": string
}
```

## Components

- **Nav** — Responsive navigation bar with logo, menu links, sign in/sign up buttons, and a hamburger menu on smaller screens.
- **Banner** — Hero section introducing the project with a call-to-action.
- **Technologies** — Displays the list of available technologies and the user's currently selected stack.
- **TechnologiesCard** — Individual technology card with details (category, difficulty, rating, badge) and an "Add to Stack" button.
- **SelectedTechnologiesCard** — Card representing a technology added to the user's stack, with an option to remove it.
- **Footer** — Responsive footer with product, company, and legal links, plus social links.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory
   ```bash
   cd devstack
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## License

This project is for learning and portfolio purposes.