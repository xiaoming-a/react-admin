// 组件的写法
// import App from "@/App";
// import Home from "@/pages/Home"
// import About from "@/pages/About";
// import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
// import React from "react";
//
// const BaseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path="/" element={<Navigate to="/home"/>}></Route>
//                 <Route path="/home" element={<Home/>}></Route>
//                 <Route path="/about" element={<About/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
//
// export default BaseRouter

import React,{ lazy,Suspense } from "react";
import { Navigate } from 'react-router-dom'
const Home =  lazy( () => import( "@/pages/Home"))
const Page1 = lazy(()=> import('@/pages/Page1'))
const Page2 = lazy(()=> import('@/pages/Page2'))
const withLoadingComponent = (comp:JSX.Element) => (
    <Suspense>
        { comp }
    </Suspense>
)


const routes = [
    {
        path:'/',
        element: <Navigate to="/page1" />
    },
    {
        path:'/',
        element: withLoadingComponent(<Home />),
        children:[
            {
                path:'/page1',
                element: withLoadingComponent(<Page1 />),
            },
            {
                path:'/page2',
                element: withLoadingComponent(<Page2 />),
            },
        ]
    },
]

export default routes
