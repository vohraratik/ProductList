import React,{useState,useEffect} from "react";
import "./App.css";
import { stockData } from "../data/data";
import {Posts} from "./api"

export const Stocks = () => {    
    
  return (
    <div>
      <HomePageHeader />
      <Posts />
      <div className="product-list">
        {stockData.map((data, key) => {
          return (
            <div className = "details" key={key}>
              <Stock
                id={data.productData.sku}
                name={data.productData.name}
                type={data.productData.type}
                group={data.productData.group}
                family={data.productData.family}
                subfamily={data.productData.subfamily}
                color={data.productData.color}
                material={data.productData.material}
                price={data.productData.price}
                price_retail={data.productData.price}
                price_professional={data.productData.price_professional}
                price_wholesale={data.productData.price_wholesale}
                
              />
            </div>
          );
        })}
      </div>
      </div>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Products List</h2>
    </header>
  );
};


export const Stock = ({ id,name,type,group,family,subfamily,color,material,price,price_retail,price_wholesale}) => {
  const [show,setShow]=useState(false)


  const Stocks1 = () => {
    if (!type) return <div />;

    function Api1(){
    const [post, getPost] = useState([])
  const API = 'https://marbleunlimited.a2hosted.com/api/inventory/main.php?sku='+id;
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <div>
      <li>Total Quantity : {post.available_quantity}</li>
      <li>Total Available : {post.total_available}</li>
      <li>Available Size : {post.available_sizes}</li>
    </div>
  );
}

   return (
     <ul>
     <li>Type: {type}</li>
     <li>Group: {group}</li>
     <li>Family: {family}</li>
     <li>Subfamily: {subfamily}</li>
     <li>Color: {color}</li>
     <li>Material: {material}</li>
     <li>Price: {price}</li>
     <li>Price_retail: {price_retail}</li>
     <li>Price_Wholesale: {price_wholesale}</li>
     <Api1/>
     </ul>
   );
 };
 

  if (!name) return <div />;
  return (
    <table>
      <tbody>
        
        <tr>
            <td>
                <h4>{id}</h4>
            </td>
          <td>
            <h4>{name}</h4>
          </td>
          <td>
          <div className="show">
            <button onClick={()=>setShow(!show)}>More Details</button>
            { show?<Stocks1 />:null }
          </div>
          </td>
        </tr>
        
      </tbody>
    </table>
    
  );
};