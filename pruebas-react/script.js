// DESCRIBIR O CREAR INTERFACES DE USUARIO
import { createElement, Fragment } from "https://esm.sh/react@19";
//LA QUE SE ENCARGA DE PINTAR EN EL DOM
import { createRoot } from "https://esm.sh/react-dom@19/client";

const root = createRoot(document.getElementById("app"));

root.render(createElement("h1", null, "Hola mundo"));