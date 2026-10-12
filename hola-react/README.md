# Práctica 12A: Hola React

**¿En qué se convirtió cada etiqueta del JSX?**

En el modo clásico cada etiqueta quedó como una llamada a `React.createElement`, por ejemplo `React.createElement("div", { className: "tarjeta" }, ...)`. 

En el modo automático quedaron como llamadas a `_jsx`, con los hijos dentro de `children`.

**Si React es "sólo una biblioteca", ¿quién traduce el JSX?**

Lo traduce SWC. React solo ofrece las funciones, como `createElement`, pero no entiende el JSX por sí mismo. El navegador tampoco lo entiende, así que antes de que el código llegue ahí, el compilador lo convierte a JavaScript normal por asi decirlo.

**¿Qué hace createRoot y qué hace render?**

createRoot crea la raíz de React sobre un elemento que ya existe en el HTML, en este caso el `div` vacío. Con eso React sabe en qué parte de la página puede trabajar. `render` recibe lo que se quiere mostrar, ya sea un elemento o un componente, y lo dibuja dentro de esa raíz.

**¿Por qué el nombre de un componente empieza con mayúscula?**

Porque así el compilador distingue entre una etiqueta de HTML y un componente. Si empieza con mayúscula, como en `<Saludo />`, lo toma como una función que él mismo tiene que llamar. 

**¿Cuál es la diferencia entre escribir semestre="8" y semestre={8}?**

Con comillas, "semestre="8" manda un string. Con llaves, "semestre={8}" manda una expresión de JavaScript, y en este caso es el número 8. La interfaz de TarjetaPerfil pide `semestre: number`, solo la segunda forma es correcta, y con comillas TypeScript marcaría error.
