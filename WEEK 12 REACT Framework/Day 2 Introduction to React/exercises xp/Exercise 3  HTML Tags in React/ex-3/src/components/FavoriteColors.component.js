import React from "react";

export const UserFavoriteColors = ({ favorites }) => 
  favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
