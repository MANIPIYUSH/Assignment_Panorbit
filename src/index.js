import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import App from './App'; 
import reportWebVitals from './reportWebVitals'; 
import { BrowserRouter } from 'react-router-dom'; 
import UserProvider from './Context/UserProvider'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM node and create a React root
root.render( // Render the App component inside the root React root
  <React.StrictMode> 
    {/* // Enable strict mode to catch potential issues */}
    <UserProvider>
       {/* // Provide the UserProvider to the App component and its children */}
      <BrowserRouter>
       {/* // Use the BrowserRouter to enable client-side routing */}
        <App />
         {/* // Render the main App component */}
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals(); // Call the reportWebVitals function to start measuring performance
