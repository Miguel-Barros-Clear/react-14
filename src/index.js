import React from "react";
import ReactDOM from "react-dom";

import { BoaTarde, BoaNoite } from "./components/multiplos";


ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>,
    document.getElementById('root')
)