# SPA en React - Redux - Styled components

Proyecto se basa en una elaboración de una single page application(SPA) utilizando React, con el flux de Redux, y para los estilos se uso la librería de estilos Styled Components.

Esta SPA contiene 3 componentes: 1.- El primero representa un componente de búsqueda (input form, search button), a este componente es sobre el cual se hacen las acciones y el fetch. 2.- Un segundo componente que representa de una CardList, 3.- Y por último el componente que contiene cada Card.

Para el manejo de datos se realizó una Api, en nodejs y express. En manejo de datos en esta Api, se hace a través de un archivo Json. Es decir, no maneja bases de datos. Solo se hizo para testeo del SPA.

La aplicación del front se levanta en el localhost:3000, para hacerlo y probarla solo debe decargar el proyecto, y aplicar npm i, para instalar las dependencias.
Antes de ejecutar ( con npm start), asegure de haber descargado y levantado el API.

El APi para esta SPA se encuentra en: <https://github.com/dorisjpch/api-node-express-person>, una vez descargado, le puedes instalar las dependencias con npm i. Levanta por el puerto 9009, ejemplo: <http://localhost:9009/api/people/maria>
