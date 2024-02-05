import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProductCard({ item }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body style={{ padding: "5px" }}>
          <Card.Text style={{ fontSize: 11, fontWeight: "bold" }}>
            {item.Heading}
          </Card.Text>
          <Card.Text style={{ fontSize: 10, textWrap: "wrap" }}>
            {item.Desc}
          </Card.Text>
          <Card.Text style={{ fontSize: 10, textWrap: "wrap" }}>
            {item["Product Price (ex GST)"]}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
