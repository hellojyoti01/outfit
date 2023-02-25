import { Route , Routes} from "react-router-dom"

import Order from "./page/app/order/order.compunents"
import Home from "./page/app/home/home.compunents"
import Signup from "./page/auth/sighup/signup.compunents"
import Signin from "./page/auth/signIn/signin.compunents"
import ProductDetail from "./page/app/product_detail/product_detail.compunent"
import OrderDetail from "./page/app/order_detail/order_detail.compunent"
import Cart from "./page/app/cart/cart"
import Profile from "./page/app/profile/profile"

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/order' element={<Order />} />
        <Route path='/order/:id' element={<OrderDetail />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />

        <Route path='/signIn' element={<Signin />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="*" element={<h1>Error </h1>} />
      </Routes>
    </>
  )
}

export default App
