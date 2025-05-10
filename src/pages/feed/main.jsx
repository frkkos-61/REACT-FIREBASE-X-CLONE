import { useEffect, useState } from "react";
import Form from "../../components/form";
import Post from "../../components/post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/loader";

const Main = ({ user }) => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    const tweetsCol = collection(db, "tweets");

    const q = query(tweetsCol, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const temp = [];
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setTweets(temp);
    });

    return () => unsub();
  }, []);

  console.log(tweets);

  return (
    <main className="border border-fourth ">
      <header className="flex flex-row justify-around border-b border-fourth p-4 font-bold cursor-pointer">
        <div className="max-h-5 hover:bg-zinc-700">Sana özel</div>
        <div className="max-h-5 hover:bg-zinc-700">Takip Edilenler</div>
        <div className="max-h-5 hover:bg-zinc-700">Grup</div>
      </header>

      <Form user={user} />

      {!tweets ? (
        <Loader designs="my-20 scale-[1.2]" />
      ) : (
        tweets.map((tweet, key) => <Post key={key} tweet={tweet} />)
      )}
    </main>
  );
};

export default Main;
