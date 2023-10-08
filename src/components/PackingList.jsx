import Items from "./items"
import PropTypes from 'prop-types'

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
//     { id: 2, description: "Charger", quantity: 12, packed: false },
//   ];

export const PackingList = ({items,onDeleteItem,onToggleItem}) => {
  return (
    <div className="list">
        <ul>
            {items.map(item => (
                <Items 
                    key={item.id} 
                    item={item} 
                    handleDelete={onDeleteItem}
                    handleToggle={onToggleItem}
                />
                ))}
            {/* <Items /> */}
        </ul>
    </div>
  )
}

PackingList.propTypes = {
    items: PropTypes.object,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired

}























// import Item from "/src/components/Items";

// export default function PackingList({
//   items,
//   onDeleteItem,
//   onToggleItem,
//   onClearList,
// }) {
//   const [sortBy, setSortBy] = useState("input");

//   let sortedItems;

//   if (sortBy === "input") sortedItems = items;

//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (sortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             onDeleteItem={onDeleteItem}
//             onToggleItem={onToggleItem}
//             key={item.id}
//           />
//         ))}
//       </ul>

//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear list</button>
//       </div>
//     </div>
//   );
// }
