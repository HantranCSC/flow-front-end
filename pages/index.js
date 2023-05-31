import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [amIsClicked, setAmIsClicked] = useState(false);
  const [duongIsClicked, setDuongIsClicked] = useState(false);
  const [th1IsClicked, setTh1IsClicked] = useState(false);
  const [th2IsClicked, setTh2IsClicked] = useState(false);
  const [th3IsClicked, setTh3IsClicked] = useState(false);
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-lg font-bold uppercase mb-4">Luồng Duyệt Báo Giá </h1>
      <div className="flex gap-10 mb-10">
        <button
          onClick={() => {
            setDuongIsClicked(false);
            setAmIsClicked(true);
            setTh1IsClicked(false);
            setTh2IsClicked(false);
            setTh3IsClicked(false);
          }}
          className={
            "w-40 p-2 rounded-md " +
            (!amIsClicked
              ? "bg-[#394867] text-white"
              : "bg-[#212A3E] text-white")
          }
        >
          Lợi Nhuận Âm
        </button>
        <button
          onClick={() => {
            setDuongIsClicked(true);
            setAmIsClicked(false);
            setTh1IsClicked(false);
            setTh2IsClicked(false);
            setTh3IsClicked(false);
          }}
          className={
            "w-40 p-2 rounded-md " +
            (!duongIsClicked
              ? "bg-[#394867] text-white"
              : "bg-[#212A3E] text-white")
          }
        >
          Lợi Nhuận Dương
        </button>
      </div>

      {amIsClicked && (
        <div className="bg-[#F1F6F9] p-6 rounded-xl mx-6 mb-10">
          <p>
            Nếu một trong những item có lợi nhuận nhỏ hơn 0, thì tự động đẩy báo
            giá lên CEO duyệt
          </p>
        </div>
      )}
      {duongIsClicked && (
        <div className="flex gap-4 bg-[#F1F6F9] p-6 rounded-xl mx-6 mb-10">
          <button
            className={
              "p-2 rounded-md " +
              (!th1IsClicked
                ? "bg-[#394867] text-white"
                : "bg-[#212A3E] text-white")
            }
            onClick={() => {
              setTh1IsClicked(true);
              setTh2IsClicked(false);
              setTh3IsClicked(false);
            }}
          >{`Giá bán (11đ) >= giá tối thiểu của người tạo báo giá (10đ)`}</button>
          <button
            className={
              "p-2 rounded-md " +
              (!th2IsClicked
                ? "bg-[#394867] text-white"
                : "bg-[#212A3E] text-white")
            }
            onClick={() => {
              setTh1IsClicked(false);
              setTh2IsClicked(true);
              setTh3IsClicked(false);
            }}
          >{`Mức giá tối thiểu của Sales supervisor (8đ) <= Giá bán (9đ) < Người tạo báo giá (10đ)`}</button>
          <button
            className={
              "p-2 rounded-md " +
              (!th3IsClicked
                ? "bg-[#394867] text-white"
                : "bg-[#212A3E] text-white")
            }
            onClick={() => {
              setTh1IsClicked(false);
              setTh2IsClicked(false);
              setTh3IsClicked(true);
            }}
          >{`Giá bán < Mức giá tối thiểu của sale supervisor`}</button>
        </div>
      )}

      {(th1IsClicked || th2IsClicked || th3IsClicked) && (
        <svg
          className="w-20 mb-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}

      {th1IsClicked && (
        <div className="bg-[#F1F6F9] p-6 rounded-xl">Tự động duyệt</div>
      )}
      {th2IsClicked && (
        <div className="bg-[#F1F6F9] p-6 rounded-xl">
          Đẩy lên sale supervisor duyệt
        </div>
      )}
      {th3IsClicked && (
        <div className="bg-[#F1F6F9] p-6 rounded-xl">Đây lên CEO duyệt</div>
      )}
    </div>
  );
}
