import React from "react";

const Ingredient = ({amount, measurament, name}) => {
    return(
        <li>
            {amount} {measurament} {name}
        </li>
    )
}

export default Ingredient;