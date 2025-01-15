import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Component/Layout.jsx";
import TablaIe from "./Pages/TablaIe.jsx";

const props = { titleIe: 'EURO €', dirApi: import.meta.env.VITE_API_EURO };
const props1 = { titleIe: 'DOLAR $USD', dirApi: import.meta.env.VITE_API_DOLAR };
const props2 = { titleIe: 'UF', dirApi: import.meta.env.VITE_API_TC };
const props3 = { titleIe: '$BTC', dirApi: import.meta.env.VITE_API_BTC };

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "/", element: <TablaIe {...props2} /> },
            { path: "/dolar", element: <TablaIe {...props1} /> },
            { path: "/euro", element: <TablaIe {...props} /> },
            { path: "/bitcoin", element: <TablaIe {...props3} /> }
        ]
    }
])

export default Router;