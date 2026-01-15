import React from "react";

export default function Visi_misi() {
  return (
    <section>
      <h3 className={`w-full text-center font-phantom text-2xl`}>
        Internet of Things
      </h3>
      <div
        className={`h-screen grid grid-rows-[1fr_auto] md:grid-cols-2 place-items-center p-6 gap-6`}
      >
        <div
          className={`bg-[url(./assets/img/Iot.jpg)] w-full h-full  bg-center bg-cover bg-no-repeat rounded-3xl place-self-center`}
        ></div>
        <p
          className={`text-justify text-sm sm:text-[17px] lg:text-lg font-mont-regular`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nobis
          cumque veritatis voluptas inventore nesciunt et numquam distinctio
          velit iste consectetur facilis, debitis amet dolores voluptates dicta
          asperiores pariatur minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam deserunt modi vitae fugit commodi ducimus
          nobis labore praesentium velit ullam voluptate quod unde nulla facere
          officiis laborum quas, similique nisi!
        </p>
      </div>
    </section>
  );
}
