import { recipes } from './Ch3_data.jsx';

// This RecipeList component contains two nested map calls.
// To simplify it, extract a Recipe component from it which will accept id, 
// name, and ingredients props.
// Where do you place the outer key and why ?


function Recipe({ id, name, ingredients }) {
    return (
        <section>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                )}
            </ul>
        </section>
    )
}

export default function RecipeList() {
    return (
        <>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <Recipe {...recipe} key={recipe.id} />
            )}
        </>
    );
}