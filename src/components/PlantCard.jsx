import React from "react";

function PlantCard({ plant, onMarkSoldOut }) {
  // Existing backend records do not define isInStock, so they start in stock.
  const isInStock = plant.isInStock !== false;

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => onMarkSoldOut(plant)}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
