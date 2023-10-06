import PropTypes from "prop-types";
function Items({item}) {
  return (
    <li>
        <span style={item.packed? {textDecoration:"line-through"}: {}}>
            {item.quantity}{item.description}
        </span>
        <button style={{color: "red", fontSize: "40px"}}>&times;</button>
    </li>
  )

}

Items.propTypes = {
    item: PropTypes.object
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
  