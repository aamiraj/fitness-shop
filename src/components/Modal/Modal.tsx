import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({
  id,
  title,
  setToggle,
  handleAction,
}: {
  id: string;
  title: string;
  setToggle: () => void;
  handleAction: () => void;
}) => {
  const handleDeleteButton = () => {
    handleAction();
    setToggle();
  };

  return (
    <div id={id} style={{ display: "none" }}>
      <div className={styles.darkBG} onClick={() => setToggle()} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Confirmation</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setToggle()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Are you sure you want to delete "{title}"?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteButton()}
              >
                Delete
              </button>
              <button className={styles.cancelBtn} onClick={() => setToggle()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
