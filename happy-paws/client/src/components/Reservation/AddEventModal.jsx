import React from "react";
import Modal from "react-modal";
import Fullcalendar from "@fullcalendar/react" 
import daygrid from "@fullcalendar/daygrid" 

export function ({ isOpen, onClose }) {
  const [titie, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <Modal isOpen={isopen} onRequestClse={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChnage={(e) => setTitle(e.target.value)}
        />
      </form>
    </Modal>
  );
}
