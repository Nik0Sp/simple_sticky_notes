import React, { useState } from "react";

function App() {
  const [showCreateBox, setShowCreateBox] = useState(false);
  const [notes, setNotes] = useState([]);
  const [userText, setUserText] = useState("");

  function handleCreateBox() {
    setShowCreateBox(true);
  }

  function handleContent(e) {
    if (e.key === "Enter") {
      const newNote = {
        id: notes.length + 1,
        text: userText,
        color: getRandomColor(),
      };
      setNotes([...notes, newNote]);
      setUserText("");
      setShowCreateBox(false);
    }
  }

  function handleRemove(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function getRandomColor() {
    const randomColors = [
      "#42a5f5",
      "#4dd0e1",
      "#9ccc65",
      "#ffd54f",
      "#90a4ae",
      "#e1bee7",
    ];
    return randomColors[Math.floor(Math.random() * randomColors.length)];
  }

  return (
    <div className="section">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <h1 className="title">Simple Sticky Notes</h1>
      <div className="container">
        <div className="notes">
          {notes.map((note) => (
            <div
              key={note.id}
              className="note"
              style={{ backgroundColor: note.color }}
              onDoubleClick={() => handleRemove(note.id)}
            >
              <div className="details">
                <h3>{note.text}</h3>
              </div>
            </div>
          ))}
          {showCreateBox ? (
            <div className="createNotes">
              <div className="innerDescription">
                <textarea
                  id="userInput"
                  placeholder="Write something here..."
                  maxLength={150}
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  onKeyDown={handleContent}
                />
              </div>
            </div>
          ) : (
            <div id="create" className="note" onClick={handleCreateBox}>
              <i className="fa-solid fa-plus"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
