import { recipes } from "./Ch2_data.jsx";

// Make a list of recipes from this array! 
// For each recipe in the array, 
// display its name as an<h2> and list its ingredients in a < ul >.

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(reciep => (
                <div key={reciep.id}>
                    <h2>{reciep.name}</h2>
                    <ul>
                        {reciep.ingredients.map(ingredient => (
                            <li key={ingredient}> {ingredient} </li>
                        ))}
                    </ul>
                </div>
            ))
            }
        </div >
    );
}