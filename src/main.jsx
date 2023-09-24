import React,{Suspense,lazy}from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Loading from "./components/testComponents/Loading.jsx";

const LazyApp = lazy(() => import('./App.jsx'));
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={ <Loading /> }>
        <Routes>
            <Route path="/*" element={<LazyApp />} />
        </Routes>
      </Suspense>
    </Provider>
  </BrowserRouter>
);
