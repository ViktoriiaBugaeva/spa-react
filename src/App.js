
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import FormInput from './Pages/FormInput/FormInput';
import FormRegistration from './Pages/FormRegistration/FormRegistration';
import Products from './Pages/Products/Products';
import Basket from './Pages/Basket/Basket';
import BigCard from './Pages/BigCard/BigCard';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';




function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<FormInput/>} />
        <Route path='/registration' element={<FormRegistration/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/bigcard' element={<BigCard/>} />
        <Route path='/*' element={<NotFoundPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
