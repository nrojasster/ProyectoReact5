import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Component/Layout.jsx";
import TablaIe from "./Pages/TablaIe.jsx";
import ErrorPage from "./Component/ErrorPage.jsx";
import { ErrorBoundary } from "./Component/ErrorBoundary.jsx";

const props = { titleIe: 'EURO €', dirApi: import.meta.env.VITE_API_EURO };
const props1 = { titleIe: 'DOLAR $USD', dirApi: import.meta.env.VITE_API_DOLAR };
const props2 = { titleIe: 'UF', dirApi: import.meta.env.VITE_API_TC };
const props3 = { titleIe: '$BTC', dirApi: import.meta.env.VITE_API_BTC };

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <ErrorBoundary><TablaIe {...props2} /></ErrorBoundary> },
            { path: "/dolar", element: <ErrorBoundary><TablaIe {...props1} /></ErrorBoundary> },
            { path: "/euro", element: <ErrorBoundary><TablaIe {...props} /></ErrorBoundary> },
            { path: "/bitcoin", element: <ErrorBoundary><TablaIe {...props3} /></ErrorBoundary> }
        ]
    }
])

export default Router;