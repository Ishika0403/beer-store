import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnotherPage from './Authentication/pages/AnotherPage';
import Error from './Authentication/pages/Error';
import LoginPage from './Authentication/pages/LoginPage';
import AllProducts from './pages/AllProducts';
import MainPage from './pages/MainPage';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/allprd' element={<AllProducts />} />
          <Route exact path='/singleprd/:id' element={<SingleProduct />} />

          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/oth' element={<AnotherPage />} />

          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
