import { useState } from 'react';
import { StoreContext } from './context/context';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage';
import AboutProductPage from './pages/AboutProductPage/AboutProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';




function App() {
  const [products, setProducts] = useState([])

  const storeState = {
    products,
    setProducts,
  }
  return (
    <div className="App">
      <StoreContext.Provider value={storeState}>
        <Header />
        <Routes>
          <Route 
            path='/category/:slug' 
            element={
              <CategoryPage/>
            }/>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/checkout' element={<CheckoutPage />}/>
          <Route 
            path='/product/:id' 
            element={
              <AboutProductPage />
            }/>
          <Route path='/contacts' element={<ContactPage />}/>
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
        <Footer />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
