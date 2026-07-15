import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };

    onAddItem(newItem);
    setTitle('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat? 🤔</h3>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
