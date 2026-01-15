import React from "react";

const Description = ({ desc, className }) => {
  return (
    <div
      className={`${className} md:w-90 lg:w-100 border border-white/20 grid place-items-center p-4 mx-2 md:mx-10 lg:mx-15 rounded-2xl bg-transparent backdrop-blur text-white text-shadow-lg`}
    >
      <p className={`font-mont-extraLight text-justify`}>{desc}</p>
    </div>
  );
};

export default function Wellcome() {
  return (
    <section id='wellcome-description' className={``}>
      <div className={`grid grid-rows-2 place-items-center  h-screen`}>
        <div
          className={`bg-[url(./assets/img/hidroponik.jpg)] block bg-position-[19%_center] sm:bg-center w-full h-full bg-no-repeat bg-cover col-start-1 col-end-2 row-start-1 row-end-3`}
        ></div>
        <h1
          className={` md:pl-20 w-full -translate-y-1/4 font-phantom text-center md:text-start text-white  md:text-5xl text-4xl text-shadow-md col-start-1 col-end-2 row-start-1 row-end-2`}
        >
          More Plants <br /> More Peace
        </h1>
        <div
          className={`bg-linear-to-t from-black to-transparent to-70%  h-full w-full col-start-1 col-end-2 row-start-1 row-end-3`}
        ></div>
      </div>
      <div
        className={`bg-black md:h-0 h-60 overflow-visible sm:text-[17px] lg:text-lg text-sm`}
      >
        <div className={`description grid -translate-y-1/6`}>
          <Description
            className={`sm:place-self-end mb-2 md:-translate-y-10/12 `}
            desc={`Aquaponik merupakan sebuah teknologi pertanian modern yang memadukan
            budidaya ikan dan tanaman dalam satu ekosistem terintegrasi. Melalui
            aquaponik, air dari kolam ikan yang kaya nutrisi dimanfaatkan sebagai
            pupuk alami bagi tanaman hidroponik. Tanaman menyaring air tersebut,
            lalu mengembalikannya dalam keadaan bersih ke kolam, menciptakan
            siklus yang efisien dan berkelanjutan.`}
          />
          <Description
            className={` md:-translate-y-1/3`}
            desc={`Aquaponik merupakan salah satu solusi untuk ketahanan pangan, karena mampu menghasilkan ikan dan sayuran segar secara bersamaan dengan penggunaan air yang lebih hemat. Website ini hadir sebagai media edukasi dan informasi bagi siapapun yang ingin mengenal, mempelajari dan mengembangkan sistem aquaponik di lingkungan rumah maupun skala produksi`}
          />
        </div>
      </div>
      <div className={`grid grid-rows-2 place-items-center h-screen`}>
        <div
          className={`bg-[url(./assets/img/ikanKolam.jpg)] block bg-no-repeat bg-position-[45%_center] h-full w-full bg-cover col-start-1 col-end-2 row-start-1 row-end-3`}
        ></div>
        <h1
          className={`w-full md:w-100 lg:w-full font-phantom pt-4 md:text-end md:text-5xl text-white text-4xl text-center  text-shadow-md col-start-1 col-end-2 row-start-2 row-end-3 place-self-start justify-self-center md:justify-self-end md:pr-10 md:-translate-y-1/2 lg:-translate-y-2/3`}
        >
          Water Flowing <br /> Life Growing
        </h1>
        <div
          className={`bg-linear-to-b from-black to-transparent to-70% h-full w-full col-start-1 col-end-2 row-start-1 row-end-3 `}
        ></div>
      </div>
    </section>
  );
}
