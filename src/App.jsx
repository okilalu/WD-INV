import { useEffect, useRef, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
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
  const bsiRef = useRef();
  const mandiriRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
  const copyText = (ref) => {
    const text = ref.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Nomor rekening ${text} berhasil disalin!`);
      })
      .catch((err) => console.error("Gagal menyalin teks: ", err));
  };
  return (
    <div className="">
      {modal && <Cover closeModal={closeModal} />}
      {/* Main */}
      <div
        id="Home"
        className="h-auto min-h-screen bg-cover flex flex-col justify-center items-center p-5 bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div className="text-center text-black w-[90%] max-w-3xl">
          <div className="text-5xl md:text-3xl lg:text-5xl capitalize flex flex-col justify-center items-center">
            <h1 className="font-[Amsterdam] text-4xl md:text-4xl ">
              The wedding of
            </h1>
            <img
              src={PersonImage}
              alt=""
              className="w-[18rem] h-[25rem] md:w-[18rem] lg:w-[20rem] rounded-full py-10 "
            />
          </div>
          <div className="text-5xl md:text-5xl flex justify-center">
            <h1 className="font-[Amsterdam]">Doni</h1>
            <h1 className="font-[Amsterdam] px-5 md:px-5">&</h1>
            <h1 className="font-[Amsterdam]">Dira</h1>
          </div>
        </div>
        <div className="text-center text-sm md:text-base text-black mt-10 font-semibold">
          <h3 className="py-5 text-[12px] md:text-sm lg:text-base leading-relaxed">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            ۝٢١{" "}
          </h3>
          <h3 className="text-xs md:text-sm lg:text-base leading-relaxed">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </h3>
        </div>
        <button
          onClick={togglePlayPause}
          className="bg-white p-2 rounded-full fixed top-5 right-5 md:top-10 md:right-10 cursor-pointer"
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
        className="flex flex-col justify-center items-center p-10 md:p-16 bg-gradient-to-b from-[#faae3c] to-[#1aa39a]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div className="text-center text-sm text-black font-semibold capitalize w-[90%] max-w-lg md:max-w-2xl">
          <h1 className="mb-5 text-lg md:text-xl" data-aos="fade-down">
            ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
          </h1>
          <h3
            className="text-sm md:text-base lg:text-lg leading-relaxed"
            data-aos="fade-up"
          >
            Atas Berkah dan Rahmat Allah Subhanallahu Wa Ta'ala. Tanpa
            mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta
            kerabat sekalian untuk menghadiri acara pernikahan kami :
          </h3>
          <div
            className="py-2 flex flex-col justify-center items-center"
            data-aos="zoom-in"
          >
            <img
              src={PersonImage}
              alt=""
              className="w-[15rem] md:w-40 lg:w-48 h-[15rem] md:h-40 lg:h-48 rounded-full py-5"
            />
            <h2 className="font-[CormorantGaramond] py-3 text-3xl md:text-3xl">
              Doni
            </h2>
            <h4 className="text-sm md:text-base leading-relaxed text-center w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis
              excepturi sint.
            </h4>
          </div>
          <h1
            className="font-[Amsterdam] px-5 text-3xl md:text-4xl"
            data-aos="fade-left"
          >
            &
          </h1>
          <div
            className="flex flex-col justify-center items-center"
            data-aos="zoom-in"
          >
            <img
              src={PersonImage}
              alt=""
              className="w-[15rem] md:w-40 lg:w-48 h-[15rem] md:h-40 lg:h-48 rounded-full py-5"
            />
            <h2 className="font-[CormorantGaramond] py-3 text-3xl md:text-3xl">
              Dira
            </h2>
            <h4 className="text-sm md:text-base leading-relaxed text-center w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              nam quod
            </h4>
          </div>
        </div>
      </div>
      {/* Couple */}

      {/* Date */}
      <div
        id="Date"
        className="h-screen bg-cover flex flex-col justify-center items-center bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${BgImage})`,
        // }}
      >
        <div
          className="w-full h-1/2 md:h-[40vh]"
          style={{
            backgroundImage: `url(${PersonImage})`,
            opacity: 0.7,
          }}
        >
          <div className="mt-40 flex flex-row justify-center items-center text-white">
            <h1 className="text-6xl  md:text-5xl lg:text-6xl font-[Lustria] text-center">
              Save{" "}
            </h1>
            <h1 className="text-6xl  md:text-5xl lg:text-6xl font-[EyesomeScript] text-center">
              the{" "}
            </h1>
            <h1 className="text-6xl  md:text-5xl lg:text-6xl font-[Lustria] text-center">
              Date{" "}
            </h1>
          </div>
        </div>

        <div className="w-90 absolute mt-40 max-w-md md:max-w-lg lg:max-w-2xl">
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
      {/* Date */}

      {/* Gallery */}
      <div
        id="Gallery"
        className="min-h-screen bg-gradient-to-b from-[#faae3c] to-[#1aa39a]"
      >
        <h1 className="pt-12 text-center mb-5 text-3xl font-[Lustria] md:text-4xl">
          Our Wedding
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 place-items-center gap-2 p-1">
          <img
            src={PersonImage}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
          <img
            src={PersonImage}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="pl-8 text-center font-[Blanka-Regular] tracking-[2.1rem] md:tracking-[3.1rem] text-3xl  md:text-3xl mb-2">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2 p-1 sm:grid-cols-2 md:grid-cols-3">
          <img
            src={PersonImage}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
          <img
            src={PersonImage}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
          <img
            src={PersonImage}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-center w-full h-[12rem] p-1">
          <img
            src={WideImage}
            alt=""
            className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Gallery */}

      {/* Gift */}
      <div
        id="Gift"
        className="min-h-screen flex-col justify-center items-center bg-gradient-to-b from-[#1aa39a] to-[#faae3c]"
      >
        <div className="text-center pt-18">
          <h1 className="text-4xl font-[Symphony]">Titip Hadiah</h1>
          <p className="text-justify pt-7 p-5 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis et iusto explicabo perferendis non maxime cumque, id
            laboriosam dolorem vitae consectetur debitis sint, quidem quod illo,
            obcaecati dolore odio?
          </p>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <div className="card rounded-xl w-[90%] bg-gradient-to-r from-[#1aa39a] to-[#faae3c] shadow-sm p-1.5">
            <div className="card-body">
              <img src={BsiImage} alt="" className="w-[7rem] self-end" />
              <img src={ChipImage} alt="" className="w-[60px] h-[40px] " />
              <p className="">1212121212</p>
              <p>Stapanus</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => copyText(bsiRef)}
                  className="btn btn-primary hover:bg-blue-600"
                >
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
                <button
                  onClick={() => copyText(mandiriRef)}
                  className="btn btn-primary hover:bg-blue-600"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gift */}
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
