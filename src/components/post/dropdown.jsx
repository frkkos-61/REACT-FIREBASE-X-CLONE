import { MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { FaTrash } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  //* Tweet'i gönderen kişi ile oturumu açık olan kişini ID'si aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  //* Silme işlemi
  const handleDelete = () => {
    //* Silinecek dokumanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    //* Dokumanı sil
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));
  };
  return (
    isOwn && (
      <>
        <label className="popup">
          <input type="checkbox" ref={inputRef} />
          <div className="burger" tabIndex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  <MdEdit className="text-blue-500" />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <FaTrash className="text-red-500" />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
            inputRef.current.checked = false;
          }}
          tweet={tweet}
        />
      </>
    )
  );
};
export default Dropdown;
