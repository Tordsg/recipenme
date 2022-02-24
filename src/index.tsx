import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './style.css';
import Profile from './routes/Profile';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import NavBar from './routes/Navbar';
import LoginForm from './components/molecules/LoginForm';
import SignUpForm from './components/molecules/SignUpForm';
import NewRecipeForm from './components/molecules/NewRecipeForm';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewRecipeForm />}>
        <Route path="profile" element={<Profile />} />
        <Route path="home" element={<Home />} />
        <Route
        path="*"
        element=
        {
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        } />
      </Route>
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
