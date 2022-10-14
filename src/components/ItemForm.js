import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  //set initial state
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  //callback function for onChange event
  function handleChange(event){
    const name = event.target.name; 
    const value = event.target.value;
    //console.log(name);
    setFormData({...formData, [name]: value});
  }

  //callback function for onSubmit event
  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }

    console.log(newItem);

    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
