import * as React from "react";
const logolemon = require("../src/content/logolemon.png");

export class HolaMundoReact extends React.Component {
    render() {
        return (
            <div>
                <h1 className={"holaMundoBox"}>Hola mundo</h1>
                <h2>{`Entorno: ${process.env.VAR_ENV}`}</h2>
                <img src={logolemon} />
            </div>
        )
    }
}