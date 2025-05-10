import { useState } from "react";
import Modal from ".";
import { db } from "../../firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import uploadToStorage from "./../../firebase/uploadToStorage";
import moment from "moment";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isPicDeleting, setIsPicDeleting] = useState();
  //* Form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    //* İnputlarda ki verilere eriş
    const text = e.target[0].value;
    const file = e.target[1].files[0];

    //* Güncellenecek dokumanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    //* Belgenin güncellenecek bilgileri
    let updatedData = {
      "content.text": text,
      isEdited: true,
    };

    //* Fotoğraf silinecekse
    if (isPicDeleting) {
      updatedData["content.image"] = null;
    }

    //* Yeni dosya yüklenecekse
    if (file) {
      const imageUrl = await uploadToStorage(file);
      updatedData["content.image"] = imageUrl;
    }

    //*Belgeyi güncelle
    await updateDoc(tweetRef, updatedData);

    //* State'i sıfırla ve modalı kapat
    setIsPicDeleting(false);
    close();
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <h1 className="text-2xl">Tweet'i düzenle</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-10 ">
        <label>İçeriği Değiştir</label>
        <textarea
          type="text"
          className="mt-3 input resize-y min-h-12 max-h-[250px]"
          defaultValue={tweet.content.text}
        />

        <label className="mt-10 mb-2">Fotoğraf Ekle / Değiştir</label>

        {!isPicDeleting && tweet.content.image ? (
          <button
            type="button"
            className="bg-fourth p-1 rounded-md transition hover:bg-fourth/50"
            onClick={() => setIsPicDeleting(true)}
          >
            Resmi kaldır
          </button>
        ) : (
          <input type="file" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button type="button" onClick={close}>
            Vazgeç
          </button>
          <button
            type="submit"
            className="bg-secondary text-black transitionpx-3 py-1 rounded-md"
          >
            Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
