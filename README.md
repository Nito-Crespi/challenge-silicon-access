# Comenzando con Create React App

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando realices cambios.\
También puedes ver cualquier error de lint en la consola.

### `npm test`

Lanza el corredor de pruebas en modo interactivo.\
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo producción y optimiza la construcción para el mejor rendimiento.

La construcción está minimizada y los nombres de los archivos incluyen los hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Notas Adicionales

Para compilar el proyecto, además de los comandos anteriores, es necesario crear un archivo `.env` en la ruta del proyecto con lo siguiente:

# .env

REACT_APP_API_URL=[url deseada para hacer las solicitudes a la api]
