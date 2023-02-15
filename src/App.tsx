import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from "@/routes";

function App() {
    const routesList = useRoutes(routes)
    return (
        <div className="App">
            {routesList}
        </div>
    )
}

export default App
