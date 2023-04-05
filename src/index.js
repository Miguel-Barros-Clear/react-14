import React from "react";
import ReactDOM from "react-dom";

import Saudacao from "./components/saudacao";

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="joao" />
    </div>,
    document.getElementById('root')
)