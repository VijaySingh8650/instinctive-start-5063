import styled from "styled-components"
import React from "react"
import {useState,useEffect} from "react"
import "./addForm.css"
export const AddForm = ({setShowForm}) => {
    
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      number: "",
      altNumber: "",
      pincode: "",
      landmark: "",
    });
    const [address,setAddress] = useState({})
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });      
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();  
      localStorage.setItem("homedecorAddress", JSON.stringify(formData));
      setShowForm(false)
    };
    
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("homedecorAddress"))
        setAddress(add)

    },[])
    return (
      <div className="form_wrapper">
        <div className="addForm">
          <h2>Address Page</h2>
          <form className="grid" onSubmit={handleSubmit}>
            <input
              required
              className="a"
              name="name"
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
            />
            <input
            required
              className="b"
              name="address"
              type="text"
              placeholder="Address*"
              value={formData.address}
              onChange={handleChange}
            />
            <input
            required
              className="c"
              limit="10"
              name="number"
              type="number"
              placeholder="Phone Number*"
              value={formData.number}
              onChange={handleChange}
            />
            <input
            required
              className="d"
              name="altNumber"
              type="number"
              limit="10"

              placeholder="Alternate Number"
              value={formData.altNumber}
              onChange={handleChange}
            />
            <input
            required
            limit="6"
              className="e"
              name="pincode"
              type="number"
              placeholder="Pincode*"
              value={formData.pincode}
              onChange={handleChange}
            />
            <input
            required
              className="f"
              name="landmark"
              type="text"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
            <input
            
              className="g"
              type="submit"
              id="submit"
            />
          </form>
        </div>
      </div>
    );
  };