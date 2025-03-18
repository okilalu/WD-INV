import { useRef, useState } from "react";
import "./App.css";
import PersonImage from "./assets/img/cth.jpg";
import MandiriImage from "./assets/img/mandiri.png";
import BsiImage from "./assets/img/BSI.png";
import ChipImage from "./assets/img/chips.png";
import WideImage from "./assets/img/wide-angle-wedding.jpg";
import Audio from "./assets/audio/music.mp3";
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import { PiMusicNotesFill, PiPauseFill } from "react-icons/pi";

function App() {
  const [modal, setModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const textRef = useRef(null);

  const closeModal = () => {
    setModal(false);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const copyText = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent);
      alert("Teks berhasil disalin!");
    }
  };
  return (
    <div className="">
      {modal && <Cover closeModal={closeModal} />}
      {/* Main */}
      <div
        id="Home"
        className="h-screen bg-cover flex flex-col justify-center items-center p-5 bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div className="text-center text-black">
          <div className="text-5xl capitalize flex flex-col justify-center items-center">
            <h1 className="font-[Amsterdam] text-4xl ">The wedding of</h1>
            <img
              src={PersonImage}
              alt=""
              className="w-[18rem] h-[25rem] rounded-b-full py-10"
            />
          </div>
          <div className="text-5xl flex">
            <h1 className="font-[Amsterdam]">Doni</h1>
            <h1 className="font-[Amsterdam] px-5">&</h1>
            <h1 className="font-[Amsterdam]">Dira</h1>
          </div>
        </div>
        <div className="text-center text-sm text-black mt-10 font-semibold">
          <h3 className="py-5">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            ۝٢١{" "}
          </h3>
          <h3>
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </h3>
        </div>
        <button
          onClick={togglePlayPause}
          className="bg-white p-2 rounded-full fixed top-5 right-5 cursor-pointer"
        >
          {isPlaying ? (
            <PiPauseFill size={20} color="black" />
          ) : (
            <PiMusicNotesFill size={20} color="black" />
          )}
        </button>
        <audio ref={audioRef} src={Audio} loop></audio>
      </div>
      {/* Main */}
      {/* Couple */}
      <div
        id="Couple"
        className="flex flex-col justify-center items-center p-16 bg-gradient-to-b from-[#faae3c] to-[#1aa39a]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div className="text-center text-sm text-black font-semibold capitalize">
          <h1 className="mb-5">
            ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
          </h1>
          <h3>
            Atas Berkah dan Rahmat Allah Subhanallahu Wa Ta'ala. Tanpa
            mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
            kerabat sekalian untuk menghadiri acara pernikahan kami :
          </h3>
          <div className="py-2 flex flex-col justify-center items-center">
            <img
              src={PersonImage}
              alt=""
              className="w-[15rem] h-[15rem] rounded-full py-5"
            />
            <h2 className="font-[CormorantGaramond] py-3 text-3xl">Doni</h2>
            <h4>
              Anak Kedua dari Pasangan Bapak Saro Mulyadi & Ibu Jasmaeni
              Beralamat di Kampung Jawa Praya
            </h4>
          </div>
          <h1 className="font-[Amsterdam] px-5 text-3xl">&</h1>
          <div className="flex flex-col justify-center items-center">
            <img
              src={PersonImage}
              alt=""
              className="w-[15rem] h-[15rem] rounded-full py-5"
            />
            <h2 className="font-[CormorantGaramond] py-3 text-3xl">Dira</h2>
            <h4>
              Anak Pertama dari Pasangan Bapak Iskandar & Ibu Mainah Beralamat
              di Dusun Mentokok Desa Penujak
            </h4>
          </div>
        </div>
      </div>
      {/* Couple */}
      {/* Acara */}
      <div
        id="Date"
        className="h-screen bg-cover flex flex-col justify-center items-center bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div
          className="w-full p-2 pb-10 h-1/2"
          style={{
            backgroundImage: `url(${PersonImage})`,
            opacity: 0.7,
          }}
        >
          <div className="mt-50 flex flex-row justify-center items-center text-white">
            <h1 className="text-6xl font-[Lustria] text-center">Save </h1>
            <h1 className="text-6xl font-[EyesomeScript] text-center">the </h1>
            <h1 className="text-6xl font-[Lustria] text-center">Date </h1>
          </div>
        </div>
        <div className="w-90 absolute mt-40">
          <div className="card bg-[#1c2229] w-full shadow-md shadow-black">
            <div className="card-body text-white text-center text-md font-[CormorantGaramond]">
              <h1 className="text-2xl font-bold font-[CormorantGaramond]">
                Akad
              </h1>
              <h2>Minggu, 21 Oktober 2025</h2>
              <h3>Pukul 09.00 WITA - Selesai </h3>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-center mt-2">
                <button className="btn btn-outline btn-sm">Map Lokasi</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 pt-35">
          <p className="text-center text-white ">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga,
            apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </p>
        </div>
      </div>
      {/* Acara */}
      {/* Gallery */}
      <div
        id="Gallery"
        className="h-screen bg-gradient-to-b from-[#faae3c] to-[#1aa39a]"
      >
        <h1 className="pt-12 text-center mb-5 text-3xl font-[Lustria]">
          Our Wedding
        </h1>
        <div className="grid grid-cols-2 gap-2 p-1">
          <img src={PersonImage} alt="" className="w-[20rem]" />
          <img src={PersonImage} alt="" className="w-[20rem]" />
        </div>
        <div>
          <h1 className="pl-8 text-center font-[Blanka-Regular] tracking-[2.1rem] text-3xl mb-2">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2 p-1">
          <img src={PersonImage} alt="" className="w-[20rem]" />
          <img src={PersonImage} alt="" className="w-[20rem]" />
          <img src={PersonImage} alt="" className="w-[20rem]" />
        </div>
        <div className="flex justify-center w-full h-[12rem] p-1">
          <img src={WideImage} alt="" className="w-[30rem]" />
        </div>
      </div>
      {/* Gallery */}
      {/* Titip Hadiah */}
      <div
        id="Gift"
        className="h-screen flex-col justify-center items-center bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
      >
        <div className="flex flex-col justify-center items-center pt-18 self-start ">
          <h1 className="text-4xl font-[Symphony]">Titip Hadiah</h1>
          <p className="text-justify pt-7 p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis et iusto explicabo perferendis non maxime cumque, id
            laboriosam dolorem vitae consectetur debitis sint, quidem quod illo,
            obcaecati dolore odio?
          </p>
        </div>
        <div className="pt-5 flex flex-col justify-center items-center ">
          <div className="card rounded-xl w-[90%] bg-gradient-to-r from-[#1aa39a] from-40% to-[#faae3c] to-20%shadow-sm">
            <div className="card-body">
              <img src={BsiImage} alt="" className="w-[7rem] self-end" />
              <img src={ChipImage} alt="" className="w-[60px] h-[40px] " />
              <p ref={textRef} className="">
                1212121212
              </p>
              <p>Stapanus</p>
              <div className="card-actions justify-end">
                <button onClick={copyText} className="btn btn-primary">
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl w-[90%] bg-gradient-to-r from-[#faae3c] from-40% to-[#1aa39a] to-20%shadow-sm mt-3">
            <div className="card-body">
              <img src={MandiriImage} alt="" className="w-[7rem] self-end" />
              <img src={ChipImage} alt="" className="w-[60px] h-[40px]" />
              <p>151515151515</p>
              <p>Stapanus</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Titip Hadiah */}
      {/* Footer */}
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Footer</h1>
      </div>
      {/* Footer */}
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
