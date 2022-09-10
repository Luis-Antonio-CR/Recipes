import { data } from "./data";

const Recipe = ({name, ingredients, steps}) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                    <li key={i} >{ingredient.name} </li>
                ))}
            </ul>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map((step, i) => (
                    <p key={i} >{step} </p>
                ))}
            </section>
        </section>
    )
};

const Menu = (props) => {
    return(
        <article>
            <header>
                <h1>{props.title}</h1>
            </header>
            <div className="recipes">
                {props.recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    )
};


ReactDOM.render(
    <Menu recipes={data} title="Delicius Recipes" />,
    document.getElementById("root")
)
    