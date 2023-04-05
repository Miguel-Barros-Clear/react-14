import React from "react";
import Filho from "./filho";

export default function Pai(props) {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>
        <Filho nome="Pedro" sobrenome={props.sobrenome} />
        <Filho {...props} />
        <Filho {...props} nome="Carla" />
      </ul>
    </div>
  );
}
