import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { auth, db } from "./../../firebase/index";
import { FaShareNodes } from "react-icons/fa6";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
const Buttons = ({ tweet }) => {
  //* Oturumu açık kullanıcı bu tweet'i beğendi mi?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  //* Like butonuna tıklanınca
  const toggleLike = () => {
    //* Güncellenecek dökümanın referansı
    const tweetRef = doc(db, "tweets", tweet.id);

    //* Beğeni yapıldıysa; Kullanıcı ID'sini like dizisinden kaldır
    //* Beğeni yapılmadıysa; Kullanıcı ID'sini like dizisine ekle
    updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className="flex justify-between items-center text-zinc-500">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaRegComment />{" "}
      </button>

      <button className="post-icon hover:text-green-400 hover:bg-green-300/20">
        <FaRetweet />
      </button>

      <button
        className="flex items-center hover:text-pink-500 relative"
        onClick={toggleLike}
      >
        <div className="post-icon hover:bg-pink-400/20 ">
          {isLiked ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
        </div>

        <span className={`${isLiked && "text-pink-500"} absolute -end-4`}>
          {tweet.likes.length}
        </span>
      </button>

      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
