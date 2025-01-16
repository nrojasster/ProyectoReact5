# React + Vite

Sitio creado con fines eductivos, para conectar React (Vite) con API publica https://mindicador.cl/, la cual tiene los principales indicadores económicos para Chile, obtenidos desde el Banco Central de Chile, por simplicidad se consultan los 4 indicadores + populares: Dolar Observado, Euro, UF y Bitcoin

Para el diseño se utiliza componentes de Material UI, tales como Table, TableContainer, Paper, Typography, TextField, Divider, entre otros.
Ademas se usa el componente luxon de React para trabajar los datos de fechas.

Si Desea desplegar este proyecto considerar lo siguiente:

ejecutar npm run build

## Variables de Entorno necesarias:

-VITE_API_TC=https://mindicador.cl/api/uf/

-VITE_API_BTC=https://mindicador.cl/api/bitcoin/

-VITE_API_DOLAR=https://mindicador.cl/api/dolar/

-VITE_API_EURO=https://mindicador.cl/api/euro/

puede ver un ejemplo del despliegue de esta aplicación en el siguiente link:

**https://proyecto5-react-api.netlify.app/**

nota: como el indicador mas consultado es la UF, se dejo en el home del sitio. y los años a consultar son desde el año 1999 en adelante, si algun indicador no existe para alguna fecha, se muestra un -, como por ejemplo Bitcoin año 2000