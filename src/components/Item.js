import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleDeleteClick() {
    fetch(`http://localhost:4000/iems/${item.id}`, {
      method: 'DELETE',
    })
    .then((r)=> r.json())
    .then(()=> onDeleteItem(item))
  }

  function handleAddToCart() {
   fetch(`http://localhost:4000/items/${item.id}`, {
method: 'PATCH',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({isInCart: !item.isInCart}),
   })
   .then((r)=> r.json())
   .then((updatedItem)=> onUpdateItem(updatedItem) )

  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
