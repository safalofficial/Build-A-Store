import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./app.css";
import axios from "axios";
import MenuCards from "./components/MenuCards";
// axios.defaults.baseURL = "localhost:7000";
// async function App() {
//   const [data, setData] = useState([]);

//   const temp = await axios.get("/");
//   console.log(temp);
//   setData(temp);
//   console.log(data);
//   return <div className="App">{/* <ProductCard /> */}</div>;
// }

// export default App;

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("POS");
  axios.defaults.baseURL = "http://192.168.56.1:7000";
  useEffect(() => {
    const getData = async () => {
      const temp = await axios.get("/products");
      setProducts(temp.data);
    };
    const getCategories = async () => {
      const temp = await axios.get("/categories");
      console.log(temp);
      setCategories(temp.data);
    };
    getData();
    getCategories();
  }, []);

  return (
    <div className="mainContainer">
      <div>
        {categories.map((item) => {
          return (
            <button
              style={{ margin: 2 }}
              key={item.id}
              onClick={() => setChosenCategory(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div>
        {products.map((item) => {
          if (item.Category == chosenCategory) {
            return (
              <div className="itemContainer" key={item["Part Name"]}>
                <ProductCard item={item} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default App;
