import React from "react";
import {render} from "react-dom";

import Menu from "./components/Menu.js";
import data from "./data/recipes.json"


render(
    <Menu recipes={data} title="Delicius Recipes" />,
    document.getElementById("root")
)
    