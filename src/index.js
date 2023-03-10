import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
  
} from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact";

const router = createHashRouter([
  {
    path: "/",
//    element: <div>Hello world!</div>,
      element: <Root />,
     //  children: [
	 // {
             // path: "contacts/1",
            //  element: <Contact />,
	  //},
	  // {
          //     path: "any",
          //     element: <App />,
	  // },
   //  ],
  },
    {
	path:'about',
	element: <App />
},
   {
	path:'home',
	element: <Root />
},
   {
	path:'contacts',
	element: <Contact />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
