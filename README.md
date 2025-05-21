# Investment Calculator

A web application developed with React and Vite that allows users to calculate and visualize investment growth over time.

## Description

This investment calculator application allows users to input:

- Initial investment
- Annual investment
- Expected return (as a percentage)
- Duration (in years)

With this data, the application calculates and displays a table showing the investment growth year by year, including the interest generated and the total value at the end of each year.

## Technologies used

- React 19
- Vite 6
- JavaScript (ES6+)
- CSS3

## Project structure

```
src/
├── assets/         # Static resources
├── components/     # React components
│   ├── Header.jsx     # Application header
│   ├── UserInput.jsx  # Component for capturing user data
│   ├── Results.jsx    # Component for displaying results
│   ├── TableHead.jsx  # Results table header
│   └── TableRow.jsx   # Results table rows
├── util/           # Utilities and helper functions
│   └── investment.js  # Investment calculation logic
├── App.jsx         # Main component
├── index.css       # Global styles
└── main.jsx        # Entry point
```

## Features

- Intuitive and easy-to-use user interface
- Real-time calculations
- Detailed visualization of results year by year
- Input validation to ensure correct data

## How to run the project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone [REPOSITORY_URL]
   cd investment-calculator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and access `http://localhost:3000` as configured in vite.config.js.

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run the linter to check code quality
- `npm run preview` - Preview the compiled version before deployment

## Building for production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

The generated files will be in the `dist` directory, ready to be deployed.

## Docker

### Building the Docker image

To build a Docker image of the application, run:

```bash
docker build . -t "investment-calculator-app:v1.0.0"
```

### Running the Docker container

To run the application in a Docker container, execute:

```bash
docker run -dp 3000:3000 investment-calculator-app:v1.0.0
```

This will map port 3000 from the container to port 3000 on your host machine, allowing you to access the application at `http://localhost:3000`.
