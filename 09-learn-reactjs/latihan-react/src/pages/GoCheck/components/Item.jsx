export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.done} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.done ? 'line-through' : '' }}>{item.title}</span>
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
