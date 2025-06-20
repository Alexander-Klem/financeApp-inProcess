import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// import './App.css';
import './index.css';
import Main from './layouts/Main/Main'
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Intro from "./components/Intro/Intro";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main />,
//     loader: mainLoader,
//     errorElement: <Error/>,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//         loader: dashboardLoader,
//         errorElement: <Error/>,
//       },
//       {
//         path: '/logout',
//         action: logoutAction
        
//       },
//     ]
//   },
  
// ]);


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Main />}>
            <Route
              index
              element={<Intro/>}/>
            <Route
              path="/Intro"
              element={<Intro/>}>
            </Route>
            <Route
              path='/Dashboard'
              element={<Dashboard />} />
            <Route
              path='*'
              element={<Error />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
