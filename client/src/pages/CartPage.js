import Layout from "../components/Layout/Layout";
import React from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";



const CartPage = () => {
  const [auth, setAuth] = useAuth();
   const { cart, setCart } = useCart();

  
  const handleopenpay=(data)=>{
    const options={
      "key": 'rzp_test_tYB40CJj1vRkA7', // Enter the Key ID generated from the Dashboard
      "amount": Number(data.amount)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Sanjuga ",
      "description": "Test Transaction",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
        console.log(response);
        axios.post(`http://localhost:8080/verify`,{response:response}).then((res)=>{
          toast.success("order completed");
           
        }).catch(err=>{
          console.log(err);
        })
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
      },
    }
    
  var rzp = new window.Razorpay(options);
  rzp.open();
   }


   const handleBuyClick = () => {
    
    const _data={
      amount:1200,
    }
    axios.post(`http://localhost:8080/orders`,_data).then((res)=>{
      if(res){
        console.log(res.data,'29');
   
        handleopenpay(res.data.data)
        
      }
    }).catch(err=>{
      console.log(err);
    })}




    const handleByClick = () => {
        navigate("/orderform")
    }


    



  const totalPrice = () => {
    try{
      let total = 0 
      cart?.map(item => {total = total+item.price});
      return total.toLocaleString("en-US",{
        style:"currency",
        currency:"INR",
      });
    }catch(error)
    {
      console.log(error)
    }
  }




  const navigate = useNavigate();
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 3);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2">{`Hello ${
              auth?.token && auth?.user?.name
            } `}</h1>
            <h4 className="text-center">
              {" "}
              {cart?.length > 1
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            {cart?.map((p) => (
              <div className="row mb-2  p-3 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width="100px"
                    height={"100px"}
                  />
                </div>
                <div className="col-md-8">
                  <h4>{p.name}</h4>
                  <p>{p.description.substring(0, 30)}</p>
                  <h4>price:₹{p.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem()}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-3 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr/>
            <h4>Total : {totalPrice()} </h4>
            <button className="btn btn-primary" onClick={()=>handleBuyClick()}>Proceed</button>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;