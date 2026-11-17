import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // PlantPage owns shared state because the form, search, and catalog read or update it.
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then(setPlants);
  }, []);

  // Add the server-returned record so the UI uses its assigned id and data.
  function addPlant(plant) {
    setPlants((currentPlants) => [...currentPlants, plant]);
  }

  function markSoldOut(plant) {
    // Persist the stock change, while updating local state immediately for feedback.
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInStock: false }),
    });

    setPlants((currentPlants) =>
      currentPlants.map((currentPlant) =>
        currentPlant.id === plant.id
          ? { ...currentPlant, isInStock: false }
          : currentPlant
      )
    );
  }

  // Derive the visible catalog so clearing search restores every plant.
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onPlantAdded={addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} onMarkSoldOut={markSoldOut} />
    </main>
  );
}

export default PlantPage;
