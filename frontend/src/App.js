import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import Loader from "./components/ui/Loader";
// import ProductsDetails from "./pages/ProductsDetails";
// import CartScreen from "./pages/CartScreen";
// import LoginScreen from "./pages/LoginScreen";
// import RegisterScreen from "./pages/RegisterScreen";
// import ProfileScreen from "./pages/ProfileScreen";
// import ShippingScreen from "./pages/ShippingScreen";
// import PaymentScreen from "./pages/PaymentScreen";
// import PlaceOrderScreen from "./pages/PlaceOrderScreen";
// import OrderScreen from "./pages/OrderScreen";

const ProductsDetails = React.lazy(() => import("./pages/ProductsDetails"));
const CartScreen = React.lazy(() => import("./pages/CartScreen"));
const LoginScreen = React.lazy(() => import("./pages/LoginScreen"));
const RegisterScreen = React.lazy(() => import("./pages/RegisterScreen"));
const ProfileScreen = React.lazy(() => import("./pages/ProfileScreen"));
const ShippingScreen = React.lazy(() => import("./pages/ShippingScreen"));
const PaymentScreen = React.lazy(() => import("./pages/PaymentScreen"));
const PlaceOrderScreen = React.lazy(() => import("./pages/PlaceOrderScreen"));
const OrderScreen = React.lazy(() => import("./pages/OrderScreen"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/product/:id" element={<ProductsDetails />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
