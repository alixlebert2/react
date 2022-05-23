import React from "react";
import { isPropertyAccessOrQualifiedName } from "typescript";


// contenu du component
function Button(props) {
    console.warn(props);
    return <button>{props.text}</button>;
}

// exportation
export default Button;