import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories} cal</p>
      <img src={image} alt="" className={style.image} />
    </div>
  );
};
