import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import ForgotPassword from "./forgot-password";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: ({ email, password }, { resetForm }) => {
      if (isSignUp) {
        //* Yeni hesap oluşturma
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            //* Email doğrulama e-poastası gönderme
            sendEmailVerification(res.user);
            toast.info(
              "Mailinize bir doğrulama e-postası gönderildi. Lütfen bilgilerinizi kontrol ederek doğrulama işlemini tamamlayın."
            );
            setIsSignUp(false);

            resetForm();
          })
          .catch((err) => toast.error("Hata!" + err.code));
      } else {
        //* Kayıtlı olan hesaba girme
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Hesaba giriş yapıldı");
            navigate("/feed");
          })
          .catch((err) => toast.error("Hata!" + err.code));
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          autoFocus
          className="input"
          onChange={formik.handleChange}
        />

        <label className="mt-5">Şifre</label>

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formik.values.password}
            className="input w-full"
            onChange={formik.handleChange}
          />

          <span
            className="absolute end-3 text-black text-2xl top-[50%] translate-y-[-40%] cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {!isSignUp ? <ForgotPassword /> : <div className="h-[28px] w-1"></div>}

        <button
          type="submit"
          className="mt-10 bg-white text-black rounded-full font-bold transition hover:bg-300"
        >
          {isSignUp ? "Kaydol" : "Giriş Yap"}
        </button>

        <p className="mt-5">
          <span className="text-gray-500">
            {isSignUp ? "Hesabınız varsa" : "Hesabınız Yoksa"}
          </span>
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="cursor-pointer ms-2 text-blue-500 hover:underline"
          >
            {isSignUp ? "Giriş Yapın" : "Kaydolun"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Form;
