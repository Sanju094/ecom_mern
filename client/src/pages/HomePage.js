import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/prices";
import Products from "./Admin/Products";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();
  //const { addToCart } = useCart();

  const[auth,setAuth] = useAuth()
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [checked, setChecked] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  const {cart, setCart } = useCart([]); // Initialize cart as an array
  // const [loading, setLoading] = useState(false);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category); // Update the categories state with the data received.
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    // getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product`
      );
  
      setProducts(data.products);
    } catch (error) {
     
      console.log(error);
    }
  };
  useEffect(() =>{
    getAllProducts();
  })

  // const getTotal = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "http://localhost:8080/api/v1/product/product-count"
  //     );
  //     setTotal(data?.total);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const addToCart = (product) => {
  //   setCart([...cart, product]); // Update the cart state with the new product
  //   toast.success("Item added to cart");
  // };

  // useEffect(() =>{
  //   if(page ===1)return loadMore()
  // },[page]);

  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `http://localhost:8080/api/v1/product/product-list/${page}`
  //     );
  //     setLoading(false);
  //     setProducts([...products, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // const handleFilter = (value, id) => {
  //   let all = [...checked];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((c) => c !== id);
  //   }
  //   setChecked(all);
  // };

  // useEffect(() => {
  //   if (!checked.length) getAllProducts();
  // }, [page, checked]);

  // useEffect(() => {
  //   if (checked.length) filterProduct();
  // }, [checked]);

  // const filterProduct = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:8080/api/v1/product/product-filters"
  //     );
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Layout title={"Best Offers"}>
      <div className="row mt-3">
        <div className="col-md-2">{/* Your filtering controls */}</div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 50)}...
                  </p>
                  <p className="card-text">₹{p.price}</p>
                  {/* <button className="btn btn-primary ms-1" onClick={() =>navigate(`/product/${p.slug}`)}>More details</button> */}
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() =>{ setCart([...cart,p])
                      localStorage.setItem('cart', JSON.stringify([...cart,p]));
                    toast.success('Item added to cart')}}
                    
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={() => setPage(page + 1)}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            )}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;






