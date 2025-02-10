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
in the component where you want to use this dynamic route, we can take the help of "useParams" from react-router-dom and in that "params" will give us the required dynamic variable

--------------------------------------------------------------------------------------------------------------------------------------------------

**CLASS BASED COMPONENTS**

older way of creating components

class based component is a normal JS class which extends from React.Component and there in a render method inside it which returns JSX

we will recieve props in class based component in a constructor 

constructor(props) {
    super(props);
}

this.state = {
  // state variables
  count:0,
  ______ ,
}

*!! never update state variables directly !!*

this.setState({
    count : this.state.count + 1,
    ___________________________ ,
}) 

Order in class based components in a parent & child :-

Parent Constructor 
Parent Render
Child Constructor
Child Render
Child Component Did Mount
Parent Component Did Mount

first constructor will be called after it completed then render will be called after that component did mount will be called , now the entire component is completed

 "componentDidMount is used to make API calls because the component first renders, and then the API call is made. This ensures that data is fetched after the initial render. It is similar to useEffect in functional components when used with an empty dependency array (useEffect(() => { ... }, []))."

Order in class based components if there is multiple children

Parent Constructor 
Parent Render
Child 1 Constructor 
Child 1 Render
Child 2 Constructor 
Child 2 Render
Child 1 Component Did Mount
child 2 Component Did Mount
Parent Component Did Mount

two phases in life cycle:

Render Phase : Constructor and Render
Commit Phase : React updates DOM and COmponent Did Mount

if there are multiple children first render phase will grouped and completed and then react will group the commit phase and will complete it, it will do like this due to optimization

**IMP**
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


MOUNTING :
  constructor (dummy state)
  render (dummy data)
    <HTML Dummy>
  component did mount 
    API call
    set State

UPDATING :
    render (API data)
      <HTML (new API data)>
    component did update

UNMOUNTING :
    component will unmount (if we move from the component)
     


NEVER COMPARE LIFE CYCLE COMPONENTS WITH FUNCTIONAL COMPONENTS