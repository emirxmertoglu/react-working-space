import { useSelector } from "react-redux";
import modals from "../modals";
import { handleClose } from "../utils";

export default function Modal() {
  const { name, data } = useSelector((state) => state.modal);
  const modal = modals.find((m) => m.name === name);

  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element data={data} />
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
