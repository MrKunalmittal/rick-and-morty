import "./style/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Catalog from "./components/Catalog";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";
import New from "./components/New";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/character/:character" element={<Detail />} />
        <Route exact path="/add" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
