import React from "react";
import { storage, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { PickDate } from "./Date";
import { formatDate } from "../utils/helper";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleCalendarStart = (date) => {
    setStartDate(date);
  };

  const handleCalendarEnd = (date) => {
    setEndDate(date);
  };

  const handleChange = (e) => {
    setFile(e.target.files?.[0]);
  };

  const handleSubmit = async (e) => {
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "todos"), {
            title,
            completed: false,
            imgUrl: url,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
          });
          setTitle("");
        });
      }
    );
  };

  return (
    <div className="form">
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" onChange={handleChange} accept="/image/*" />
        <PickDate
          startDate={startDate}
          endDate={endDate}
          handleCalendarStart={handleCalendarStart}
          handleCalendarEnd={handleCalendarEnd}
        />
      </div>
      <div className="btn_container">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}
