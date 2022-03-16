import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Products() {
  let history = useHistory();
  const [cart, setcart] = useState([]);
  const [product] = useState([
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
  ]);

  const addtocart = (id) => {
    let check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = product.filter((item) => {
        return item.id === id;
      })
       
      setcart([...cart,...data]);
    } else {
      alert("the product has already added to the cart");
    }
  };
  console.log("data",cart)
  // console.log("state",product)
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <h4>PRODUCTS</h4>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginRight: "50px",
          }}
        >
          <span
            onClick={() => {
              history.push({ pathname: "/Cart", state: cart });
            }}
            style={{ cursor: "pointer" }}
          >
            <h4>Cart</h4>
          </span>
          <img
            style={{
              height: "23px",
              width: "23px",
              marginLeft: "10px",
              marginTop: "3px",
            }}
            src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1647262910~hmac=9163d70741bc6ba990bdfaa631f503f8"
            alt={"cart"}
          ></img>
          {cart.length >= 1 ? (
            <div style={{ marginLeft: "2px" }}>{cart.length}</div>
          ) : null}
        </div>
      </div>

      {product.map((item, key) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
            key={key}
          >
            <img
              src={item.image}
              style={{
                height: "200px",
                width: "250px",
                marginLeft: "100px",
              }}
              alt={"img"}
            ></img>
            <div>
              <h5 style={{ marginLeft: "20px" }}>{item.title}</h5>
              <h6 style={{ marginLeft: "20px", marginTop: "50px" }}>
                {item.description}
              </h6>
              <h5 style={{ marginLeft: "20px" }}>
                {"$"}
                {item.price}
              </h5>
              <Button
                style={{ marginLeft: "20px", marginTop: "20px"   }}
                size="sm"
                onClick={() => addtocart(item.id)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
