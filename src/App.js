import  React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Auth from "./Component/Login/Auth";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Surprise from "./Component/Surprise/Surprise";
export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  return (
    <MyContext.Provider value={[user, setUser]}>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="surprise" element={<Surprise />} />
          </Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
