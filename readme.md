# Creando una Red Social
## Preámbulo

    Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
    sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
    vivir sin ellas.

    Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
    en una ronda de financiamiento con inversionistas, se presentó una red social
    para químicos en la que los usuarios podían publicar artículos sobre sus
    investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
    de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
    más comentado.

### Definición del producto  

    Les presento a Vital, una red social para personas que buscan compartir y aprender sobre alimentación saludable, con Vital solo es necesario registrarte ingresando tu correo electrónico y contraseña para que puedas iniciar sesión y de esa forma acceder a la aplicación y empieces a publicar tus recetas, consejos de cocina, ideas creativas de presentación de los platos para los más pequeños de la casa, etc. Vital esta allí para que puedas compartir la información que quieras. 

#### Paleta de colores

   ![Con titulo](src/images/color-palette.PNG "Paleta de colores")

#### Interfaz de Usuario

   ![Con titulo](src/images/login.PNG "Inicio de sesión")
   ![Con titulo](src/images/register.PNG "Registro de usuario")
   ![Con titulo](src/images/wall.PNG "Muro para publicaciones")

### Conclusiones de pruebas con el producto en HTML.

    El proyecto no presenta errores o advertencias pasando así la prueba de validación de: https://validator.w3.org/ 
  
### Pruebas / tests

* [x]  Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [x]  Pasa tests (y linters) (`npm test`).

### Funcionalidades del Producto

#### Creación de cuenta (sign up)

* [x]  Permite crear cuenta.
* [x]  Valida email.
* [x]  Valida password.
* [x]  Muestra mensajes de error.

#### Inicio de sesión (sign in)

* [x]  Permite iniciar sesión.
* [x]  Valida email.
* [x]  Valida password.
* [x]  Muestra mensajes de error.

#### Muro (wall/feed)

* [x]  Muestra _muro_, o lista de publicaciones.
* [x]  Permite hacer nuevas publicaciones.
* [x]  Permite eliminar publicaciones.
* [x]  Pide confirmación antes de borrar publicación.
* [x]  Permite editar publicación en el mismo lugar (in place).

### Historias de usuario

* Yo como usuario anonimo debo poder registrarme con mi correo.
* Yo como usuario registrado debo poder iniciar sesión con mi correo.
* Yo como usuario loggeado debo poder agregar una publicación.
* Yo como usuario loggeado debo poder eliminar una publicación.
* Yo como usuario loggeado debo poder editar una publicación.
