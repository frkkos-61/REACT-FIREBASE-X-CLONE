import { toast } from "react-toastify";
import { storage } from ".";
import { v4 } from "uuid";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

//* Bu fonk. parametre olarak dosyayı alıp türü resimse eğer Firebase/Storage'a yükle ardından URL'ini return et

const uploadToStorage = async (file) => {
  //* Dosya resim değilse ya da dosya yoksa fonk. durdur
  if (!file || !file.type.startsWith("image")) return null;

  //* Max. dosya boyutunu belirle
  if (file.size > 2500000) {
    toast.error("Lütfen 2 MB altında medya yükleyin");
    throw new Error("Resim 2 MB'dan daha büyük olamaz");
  }

  //* Dosyanın yükleneceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  //* Referansını oluşturduğumuz konuma dosyayı yükle
  await uploadBytes(imageRef, file);

  //* Storage yüklenen dosyanın URL'ini al ve return et
  const url = await getDownloadURL(imageRef);

  return url;
};

export default uploadToStorage;
