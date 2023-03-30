import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import TextNote from "./TextNote";
import SavedNote from "./SavedNote";
import Footer from "./Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((data, idx) => {
        return idx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <TextNote passNote={addNote} />

      <div className="row container mx-auto my-5 gy-2   saved-note ">
        {addItem.map((val, idx) => {
          return (
            <SavedNote
              key={idx}
              id={idx}
              title={val.title}
              content={val.content}
              deleteNote={onDelete}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default App;
