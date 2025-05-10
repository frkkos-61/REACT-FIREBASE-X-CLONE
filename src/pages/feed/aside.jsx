import { BsThreeDots } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCheck } from "react-icons/md";

const Aside = () => {
  return (
    <div className="max-xl:hidden h-screen">
      <div className="w-[320px] ml-8 mt-5 relative">
        <input
          type="text"
          className="w-full h-10 pl-10 pr-5 rounded-full border focus:ring-2 focus:ring-blue-700 bg-zinc-800 text-white"
          placeholder="Ara"
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="w-[320px] ml-8 mt-5 border border-gray-400 p-2 rounded-2xl ">
        <h1 className="font-bold text-[20px] mb-2">Premium'a Abone Ol</h1>
        <p className="text-sm">
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik
          üreticisi gelir payı kazan.
        </p>
        <button className="bg-[#00acee] rounded-xl px-2 py-1 text-sm font-bold mt-1">
          Abone Ol
        </button>
      </div>

      <div className="w-[320px] ml-8 mt-5 border border-gray-400 p-2 rounded-2xl cursor-pointer ">
        <h1 className="text-1xl font-bold mb-4">Neler oluyor?</h1>
        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between font-bold text-sm ">
            #Futbol
            <BsThreeDots className="opacity-50" />
          </div>
          <span className="text-[12px] opacity-50">
            Haberler - Gündemdekiler
          </span>
          <span className="text-[12px] opacity-50">8.915 gönderi</span>
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between font-bold text-sm">
            #Gassal
            <BsThreeDots className="opacity-50" />
          </div>
          <span className="text-[12px] opacity-50">
            Haberler - Gündemdekiler
          </span>
          <span className="text-[12px] opacity-50">8.915 gönderi</span>
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between font-bold text-sm">
            #Suriyeli
            <BsThreeDots className="opacity-50" />
          </div>
          <span className="text-[12px] opacity-50">
            Haberler - Gündemdekiler
          </span>
          <span className="text-[12px] opacity-50">8.915 gönderi</span>
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between font-bold text-sm">
            #Avrupa
            <BsThreeDots className="opacity-50" />
          </div>
          <span className="text-[12px] opacity-50">
            Haberler - Gündemdekiler
          </span>
          <span className="text-[12px] opacity-50">8.915 gönderi</span>
        </div>
      </div>

      <div className="w-[320px] ml-8 mt-5 border border-gray-400 p-2 rounded-2xl cursor-pointer ">
        <h1 className="text-2xl font-bold mb-4 ml-2">Kimi takip etmeli</h1>
        <div className="grid grid-flow-col mb-4 ml-1 ">
          <img src="/react.jpg" className="rounded-full size-[40px] " />
          <div className="flex flex-col ">
            <div className="flex flex-row ">
              <h1>React Js </h1>
              <MdOutlineCheck className=" bg-blue-500 text-black rounded-full m-1 text-sm" />
            </div>
            <span>@react_js</span>
          </div>
          <button className="bg-white rounded-xl text-black m-5 px-3 text-sm font-bold mt-1 ">
            Takip et
          </button>
        </div>

        <div className="grid grid-flow-col mb-4 ml-1 ">
          <img src="/js.jpg" className="rounded-full size-[40px] " />
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <div className="flex flex-row">
                <h1>JavaScript </h1>
                <MdOutlineCheck className=" bg-blue-500 text-black rounded-full m-1 text-sm" />
              </div>
              <span>@jscover</span>
            </div>
          </div>
          <button className="bg-white rounded-xl text-black m-5 px-3 text-sm font-bold mt-1 ">
            Takip et
          </button>
        </div>
        <div className="grid grid-flow-col mb-4 ml- ">
          <img src="/react.jpg" className="rounded-full size-[40px] " />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1>TailwindCss </h1>
              </div>
              <span>@tailwind_0</span>
            </div>
          </div>
          <button className="bg-white rounded-xl text-black m-5 px-3 text-sm font-bold mt-1 ">
            Takip et
          </button>
        </div>
      </div>
    </div>
  );
};
export default Aside;
