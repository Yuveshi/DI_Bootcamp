import React from "react";

export function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
};

return (
  <>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <UserFavoriteColors favorites={user.favAnimals} />
    </>
);
}

function UserFavoriteColors({ favorites }) {
  return (
    <ul>
      {favorites.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
}


