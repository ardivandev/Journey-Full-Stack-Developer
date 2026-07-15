import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function InputNote({ getNoteValue }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const note = formData.get('note-input');
    if (note.trim() !== '') {
      getNoteValue(note);
      e.target.reset();
    }
  }

  return (
    <form action="" className="mb-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="note-input" className="form-label">
          Masukkan catatan / tugas
        </label>
        <input
          type="text"
          className="form-control"
          id="note-input"
          aria-describedby="note-input"
          name="note-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Tambah
      </button>
    </form>
  );
}

function ListNote({ notes, deleteNote }) {
  return (
    <div>
      {notes.map((note, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-grow-1 p-2">
            <p
              style={{
                textAlign: 'justify',
              }}
            >
              {note}
            </p>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-danger" onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Notes() {
  const [notes, setNotes] = useState([]);

  function getNoteValue(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(iNote) {
    setNotes((notes) => notes.filter((_, index) => index !== iNote));
  }

  return (
    <div className="container p-5">
      <h1 className="text-center mb-5">Notes</h1>
      <InputNote getNoteValue={getNoteValue} />
      <ListNote notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default Notes;
