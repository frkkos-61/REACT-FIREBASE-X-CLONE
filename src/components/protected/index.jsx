import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "./../loader/page-loader";
import { toast } from "react-toastify";

//* Kullanıcının Login olmadığı sayfada bekleme sayfası olarak tanımlanabilecek bir sayfa oluşumu
const Protected = () => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  //* Kullanıcının oturum verilerini alma
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsub();
  }, []);

  //* Oturum verileri gelene kadar Loader renderla

  if (user === undefined) {
    return <PageLoader />;
  }

  //* Kullanıcının oturumu kapalıysa ve Mail adresi doğrulanmamışsa Login'e yönlendir
  if (user === null || !user?.emailVerified) {
    //* Kullanıcının oturumu açık ama e-posta doğrulanmamışsa bildirim gönder
    if (!user?.emailVerified) toast.info("Lütfen mail adresinizi doğrulayınız");
    return <Navigate to="/" replace />;
  }

  //* Oturum açık ve e-postası doğrulanmışsa sayfayı göster
  //* İlgili sayfaya user verilerini Prop olarak gönder
  return <Outlet context={user} />;
};

export default Protected;
