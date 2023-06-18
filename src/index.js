import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar";
import store from "./Store";
import "./Components/Todo.css";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const store = Store()

root.render(
  <StrictMode>
    <Provider store ={store}>
     <Navbar/>
     <footer className="card-footer bg-transparent border-success">
     <p className="homeTitle text-center">Habits decide your future! Track them...</p>
     </footer>
    </Provider>
  </StrictMode>
);