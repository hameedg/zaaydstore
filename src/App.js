import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      {/* <Router>
      <div className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" exact>
          </Route>
          <Route path="/products/:id">
          </Route>
        </Switch>
      </div>
    </Router> */}
    <Layout>

      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/products/:id" element={<ProductDetail />}>
          
          </Route>
      </Routes>

    </Layout>
      {/* <ProductDetail />
      <Hero />
      <Recommendation />
      <Footer /> */}
    </>
  );
};

export default App;

{
  /* <Router>
<Layout>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
</Layout>
</Router> */
}
