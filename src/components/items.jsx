import PropTypes from "prop-types";
function Items({item, handleDelete, handleToggle}) {
  return (
    <li>
        <input 
            type="checkbox" 
            value={item.packed} 
            onChange={() => handleToggle(item.id)} 
        />
        <span 
            style={item.packed? {textDecoration:"line-through"}: {}}>
            {item.quantity} {item.description}
        </span>
        <button 
            style={{color: "red", fontSize: "40px"}} 
            onClick={() => handleDelete(item.id)}>
                &times;
        </button>
    </li>
  )

}

Items.propTypes = {
    item: PropTypes.object,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default Items

























// export default function Item({ item, onDeleteItem, onToggleItem }) {
//     return (
//       <li>
//         <input
//           type="checkbox"
//           value={item.packed}
//           onChange={() => onToggleItem(item.id)}
//         />
//         <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//           {item.quantity} {item.description}
//         </span>
//         <button onClick={() => onDeleteItem(item.id)}>❌</button>
//       </li>
//     );
//   }
  