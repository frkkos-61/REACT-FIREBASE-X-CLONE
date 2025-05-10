import Aside from "./aside";
import Main from "./main";
import Nav from "./nav";
import { useOutletContext } from "react-router-dom";

const Feed = () => {
  //* Protected sayfasında Outlet ile gönderilen user verisini al
  const user = useOutletContext();

  return (
    <div className="h-screen bg-primary overflow-y-auto text-secondary grid grid-cols-[1fr_minmax(300px,600px)_1fr]">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;
