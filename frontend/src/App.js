import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./Components/Form/Form";
import PageUser from "./Components/PageUser/PageUser";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Form />} />{" "}
                    <Route path="/user-account" element={<PageUser />} />{" "}
                </Routes>{" "}
            </div>{" "}
        </BrowserRouter>
    );
}

export default App;
