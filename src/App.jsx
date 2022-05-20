import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage';
import AboutProductPage from './pages/AboutProductPage/AboutProductPage';
import ContactPage from './pages/ContactPage/ContactPage';



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/category/:slug' element={<CategoryPage/>}/>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/checkout' element={<CheckoutPage />}/>
        <Route path='/product/:id' element={<AboutProductPage />}/>
        <Route path='/contacts' element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
