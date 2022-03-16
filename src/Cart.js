import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Cart({ location: { state } }) {
  const [cart, setcart] = useState(state);

  const removeProduct = (id) => {
    let data = cart.filter((item) => {
      return item.id !== id;
    });

    setcart(data);
  };

  return (
    <>
      <div className="col-md-8">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginLeft:"20px"
          }}
        >
          <h4>CART</h4>
        </div>

        {cart.length >= 1 &&
          cart.map((item, key) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
                key={key}
              >
                <img
                  style={{
                    height: "200px",
                    width: "250px",
                    marginLeft: "100px",
                  }}
                  src={item.image}
                  alt={"img"}
                ></img>

                <div>
                  <div style={{ display: "flex", flexDirection: "row"}} >
                    <h5 style={{ marginLeft: "20px" }} >{item.title}</h5>
                    
                  </div>
                  <h6 style={{ marginLeft: "20px", marginTop: "50px" }}>
                    {item.description}
                  </h6>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <h5 style={{ marginLeft: "20px",marginTop:"10px" }}>
                      {"$"}
                      {item.price}
                    </h5>
                    <div>
                      <Button style={{ marginLeft: "100px" }}>-</Button>
                       <span></span>
                      <Button style={{ marginLeft: "20px" }}>+</Button>

                    </div>
                    <img
                      style={{marginTop:"2px",marginLeft:"200px",cursor:"pointer",height:"35px",width:"35px"}}
                      src="https://cdn-icons-png.flaticon.com/128/7086/7086980.png"
                      alt="delete"
                      onClick={() => removeProduct(item.id)}

                    >
                      
                    </img>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="col-md-4"></div>
    </>
  );
}
