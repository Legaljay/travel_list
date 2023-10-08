import { useState } from "react"
import { Form } from "./components/Form"
import { Logo } from "./components/Logo"
import { PackingList } from "./components/PackingList"
import Stats from "./components/Stats"



export default function App(){
  const [items, setItems] = useState([])
  ///updating an item: complex immutable data operation
  function handleAddItems(item){
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id){
    setItems(
      (items) => items.map(
              item => item.id === id ? 
                   {...item, packed: !item.packed } : item
              )
            )
  }

  function handleDeleteList(){
    const confirmed = window.confirm('Are you sure you want to delete all items?') //this pops up a window with the message, and returns a boolean value
    confirmed ? setItems([]): null ; //so the setter is rendered if only the client clicks ok(true), else operation is canceled
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items}/>
    </div>
  )
}







































// import { useState } from "react";
// import Logo from "/src/components/Logo";
// import Form from "/src/components/Form";
// import PackingList from "/src/components/PackingList";
// import Stats from "/src/components/Stats";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItem(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleToggleItem(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleClearList() {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete all items?"
//     );

//     if (confirmed) setItems([]);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems} />
//       <PackingList
//         items={items}
//         onDeleteItem={handleDeleteItem}
//         onToggleItem={handleToggleItem}
//         onClearList={handleClearList}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }
