import React, { useState } from "react";
import Recipe from "./Recipe";
import { TextField } from "@material-ui/core";
import MyButton from "./style";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  lol: {
    display:"flex",
    justifyContent:"space-around",
    flexWrap:"wrap"
  }
}));

function App() {
  const APP_ID = "f0321ec8";
  const APP_KEY = "e7c141eb38722bfdd28f2da70b693321";

  const classes = useStyles();

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");


  const getRecipe = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setrecipes(data.hits);
    setsearch("");
  };
  return (
    <form onSubmit={getRecipe}>
      <TextField
        id="standard-basic"
        label="Search"
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      ></TextField>
      <MyButton size="small" type="submit">
        Get Recipe
      </MyButton>
      <div className={classes.lol}>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </form>
  );
}

export default App;
