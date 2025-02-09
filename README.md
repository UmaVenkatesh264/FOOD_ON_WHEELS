**USE EFFECT** will be called everytime that component renders, we can modify this with dependency array

only callback fn is mandatory inside useeffect, dependency array is not mandatory

=> If there is no dependency array, useeffct will be called on every render

=> If dependency array is empty, useeffect will be called on initial render (only just once)

=> If there is a state variable in dependency array, then useeffect will be called everytime that variable changes

BEST PRACTICES :

=> only imports are at top
=> hooks will always inside the component
=> usestate at the top of component
=> never use usestate inside a conditions, loops and functions

**REACT ROUTER**
1. Install React Router => npm i react-router-dom
2. Import createBrowserRouter
3. Set the configuration in createBrowserRouter => appRouter = > path, element, children and errorelement
4. provide this configuration => import RouterProvider
5. <RouterProvider router={appRouter}/>
6. React Router DOM gives us access to a Hook => useRouteError - It will provide the details about the Error

Children Routes :
create children inside appRouter
import Outlet from react router dom
this outlet will take care of that children
the required route will replace outlet

(check code for better understanding) 


Never use anchor tags in React because it will refresh/reloads  the whole page which overrides the idea of SPA - we use "href" in anchor tag

instead use "link" which has superpowers which was given by react router dom - we use "to" in link tag

2 types of  Routing
client side routing - above react router
server side routing - traditional html anchor tags - It will request server for the routing

**Dynamic Routing**

in the path, use ":" for the dynaic route

