import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Order() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [extra, setExtra] = useState("");
  const [product, setProduct] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name };

    console.log(formData);
  }

  return (
    <div className="order-page">
        <Form style={{ padding: 30 }} className="order-form" onSubmit={handleSubmit}>
        <Form.Label><h3>Order Request</h3><p>Hello! Thank you for choosing Iconic Desserts. For non-custom orders please fill out the form below and I will be glad to assist you. Please allow 24 hours after you submit your inquiry to receive an invoice. 
</p><p>For custom orders please email <a href="mailto:smarwilliams@gmail.com">smarwilliams@gmail.com</a> to schedule a free 15 minute phone consultation to go over in detail what you desire.</p></Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            First and Last Name
          </InputGroup.Text>
          <Form.Control
            type="text"
            id="name"
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
          <Form.Control
            type="text"
            id="about"
            required="true"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email Address</InputGroup.Text>
          <Form.Control
            type="text"
            id="genre"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Item(s) to order</InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={2}
            id="about"
            required="true"
            placeholder="What would you like to order? Please include size and name of products you are ordering from our menu."
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Extras</InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={2}
            id="about"
            placeholder="Need to add any extras? Edible gold, flowers, colored buttercream, candles or cake topper? Please state so here."
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
          />
        </InputGroup>

        

   

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Delivery Address:</InputGroup.Text>
          <Form.Control
            type="text"
            id="platform"
            required="true"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Date of Service:</InputGroup.Text>
          <Form.Control
            type="date"
            id="release_date"
            required="true"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </InputGroup>
      </Form>
      <div className="order-info">
        <h4>Ordering Information</h4>
        <p>
          All non-custom menu items can be ordered a minimum of 48 hours in
          advance and must be paid in full at that time.
        </p>
        <p>
          All custom orders must be placed at least 14 days in advance, require
          a 50% non-refundable retainer to secure your date and the balance must
          be paid in full 7 days prior to pick-up or delivery.
        </p>
        <h4>Cancellation Policy</h4>
        <p>
          Order cancellations are accepted 7 days or more prior to the
          delivery/pick-up date. All monies minus the 50% non-refundable
          retainer will be returned within 14 business days.
        </p>
        <p>
          Cancellations 3-6 days prior to delivery or pick-up you will be issued
          a store credit minus the 50% non-refundable retainer.
        </p>
        <p>
          Cancellations the day of the event and up to 48 hours of the event
          date you forfeit all monies paid and your cake will still be available
          for delivery or pick-up or can be donated to charity.
        </p>
        <p>All cancellations must be submitted in writing via email.</p>
      </div>
      
    </div>
  );
}

export default Order;
