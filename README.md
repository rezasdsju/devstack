# DevStack

DevStack is a project where users can choose their development stack by selecting technologies, and can remove selected technologies from their stack.

## Live Demo

[https://devstack-q94l3ftgx-reza-babd.vercel.app](https://devstack-q94l3ftgx-reza-babd.vercel.app)

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



---
#React Concepts

## What is JSX, and why is it used in React?
JSX stands for JavaScript XML. The syntax expression that allows to write HTML-like markup directly inside JavaScript files is called JSX.

React uses JSX mainly to make building user interfaces simpler, safer, and more intuitive

1. Better Readability and Simplicity: We can write clean, familiar markup using JSX instead of writing verbose, nested JS function to create UI elements.

2. Keeping UI and Logic Together: Traditionally HTML templates and JS logic put in separate files.
But in React we can use markup and JS logic in the same function or component.


## What is the difference between props and state?

Though Props and state are JavaScript object, there is massive difference between props and state.
Props are passed into a component, while state is managed and created from within the component

Key Differences:
- Data Flow: Props flows unidirectionally that means parent to child component. They acts like arguments or parameters passed to a function. On the other hand, state lives inside the component and is local and private to that specific component

- Mutability: Props are immutable(read-only) but state is mutable.


## What does the useState hook do, and where did you use it in this project?
useState hook is a build in React function. It allows to add, track and update local state inside a functional component. useState mainly return an array containing two items- current state and a setter function. Setter function is used to update the current state.

In this DevStack project, useState has been used in 'Technologies' component to track and update the state of selected technologies.

```tsx
const [selected, setSelected] = useState<TechnologiesType[]>([])
```
## What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is a build in React tool. It allows us to perform side effects in functional components. SideEffect is used to fecthing data, setting up subscriptions, or manually changing the dom without reaching the purely predictable world of React's rendering engine

If we try to fetch JSON data directly inside the main body of a react component without useEffect, we can face two major issue:
1. Preventing infinite rendering loops
Without useEffect: The components renders-->fetches data-->updates state-->triggers a re-render-->fetches data agein-->updates state again . This process create destructive infinite loops.

2. With useEffect: React fetches a jso data exactly once a load, save it to state, re-renders to show data and then stops.


## Why does every item in a .map() list need a unique key prop?
.map() loop need a unique key prop because it act as a stable identity marker. It tells React exactly which virtual DOM element corresponds to which real DOM node.

If we do not use unique key prop, React faces struggles to track individual items when data chenges.And it may causes performance degradation.

## What is conditional rendering? Show one place you used it 
Conditional rendering is a technique that controls which parts of a user interface are displayed based on a condition.

In this DevStack project, conditional rendering has been used multiple times. One of the example is 'Technologies component'. This is given below:

```
                    <div>
                        <h2>Your Stack</h2>
                        <p>{selected.length > 0 ? `${selected.length} Technologies selected` : `No technologies selected yet.`}</p>
                        {selected.length === 0 ?
                            <div className="border border-gray-200 px-4 py-7 mt-4 rounded-2xl">
                                <h2>Your Stack is Empty</h2>
                            </div> : <div>
                                {selected.map(technology => <SelectedTechnologiesCard
                                    key={technology.id}
                                    technology={technology}
                                    selected={selected}
                                    setSelected={setSelected}


                                ></SelectedTechnologiesCard>)}
                            </div>}
                          </div>
                        </div>
```


## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent component to a child component by the props and the child sends data back using callback functions or custom events.

Parent to Child(Passing data down by props):
- Create a property: The parent assigns a value to an attribute or property on the child component's tag
- Receiving the data: The child components accept the value using props
- Display the value: The child renders or uses the received data directly in its logic

Child to parent(Using Callback):
- To send data upward, the parent component defines a function that expects an argument. The parent passes this function down to the child as prop. when an event happens in the child(like a button click), the child executes that function and passes its own data into it as an argument, sending the information back up