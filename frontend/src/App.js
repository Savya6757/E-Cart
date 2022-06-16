import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./pages/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./pages/ProductsDetails";
import CartScreen from "./pages/CartScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
