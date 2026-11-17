# Plantsy

Plantsy is a React plant inventory app that lets a store administrator view plants, add new inventory, mark plants sold out, and filter the catalog by name. Plant data is persisted through a local JSON Server API.

## Screenshot

![Completed Plantsy application](./plantsy-screenshot.png)

## Features

- Loads the complete plant catalog when the page opens
- Adds a plant to the catalog through a controlled API submission flow
- Marks a plant sold out without removing it from the catalog
- Filters plants in real time using a case-insensitive name search
- Renders the original JSON Server catalog or alternate test data consistently

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Usage

Start the backend API in one terminal:

```bash
npm run server
```

The API runs at `http://localhost:6001`, with the plant collection available at `http://localhost:6001/plants`.

Start the React application in a second terminal:

```bash
npm run dev
```

Open the Vite URL printed in the terminal, normally `http://localhost:5173`.

## API

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/plants` | Retrieve the plant catalog |
| `POST` | `/plants` | Create a plant |
| `PATCH` | `/plants/:id` | Update a plant's stock status |

Create requests send a JSON body containing `name`, `image`, and `price`.

```json
{
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

## Tests

Run the Vitest suite once:

```bash
npm test -- --run
```

Run it in watch mode:

```bash
npm test
```

## Project Structure

- `src/components/PlantPage.jsx` owns catalog and search state
- `src/components/NewPlantForm.jsx` creates plants through `POST`
- `src/components/PlantList.jsx` renders the filtered catalog
- `src/components/PlantCard.jsx` displays a plant and stock state
- `src/components/Search.jsx` updates the search query
- `db.json` stores the JSON Server data

## Contributing

Create a feature branch, keep changes focused, and run the test suite before opening a pull request.

## Project Status

The project is complete and available as a local React and JSON Server application.
