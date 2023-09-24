import React,{Suspense,lazy}from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Spinner from "./components/Loader/loader";

const LazyApp = lazy(() => import('./App.jsx'));
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={ <Spinner /> }>
        <Routes>
            <Route path="/*" element={<LazyApp />} />
        </Routes>
      </Suspense>
    </Provider>
  </BrowserRouter>
);
