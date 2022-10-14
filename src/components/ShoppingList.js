import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //add state here
  const [search, setSearch] = useState(""); //initial search text value is ""

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //use array method chaining here
  //two filters
  const itemsToDisplay = items
  
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  
  .filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  function onSearchChange(event){
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
