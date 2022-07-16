import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setFilter] = useState('All')
  const [snacks, setSnacks] = useState(items)
  function handleFilter(event){
    setFilter(event.target.value)
  }
  const snacksToDisplay = snacks.filter((snack) => {
    if(selectedCategory === "All"){
      return true;
    }else{
      return snack.category === selectedCategory;
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {snacksToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
