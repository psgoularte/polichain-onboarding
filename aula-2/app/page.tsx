//"use client";

import ImageButton from "@/components/Button";
//import { useState, useEffect } from "react";

export default function Home() {
  //const [message, setMessage] = useState("");

  /* useEffect(() => {
    async function loadHelloWorld() {
      try {
        const response = await fetch("/api/helloworld");

        console.log(response);

        const json = await response.json();
        console.log(json);

        setMessage(json.message);
      } catch (err) {
        console.error(err);
      }
    }
    loadHelloWorld();
  }, []); */

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {}
      <div className="mt-8 w-full max-w-3xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Sobre o Site</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          Phasellus molestie magna.
        </p>

        {/*Botão Modelos*/}
        <div className="pt-6 flex justify-center">
          <ImageButton
            imageUrl="/LesPaul.png"
            linkUrl="/modelos"
            buttonText="Modelos"
          />
        </div>

        {/*Botão Obras*/}
        <div className="pt-6 flex justify-center">
          <ImageButton
            imageUrl="/Dark_Side_of_the_Moon.png"
            linkUrl="/obras"
            buttonText="Obras"
          />
        </div>

        {/*Botão História*/}
        <div className="pt-6 flex justify-center">
          <ImageButton
            imageUrl="/background.png"
            linkUrl="/historia"
            buttonText="História"
          />
        </div>
      </div>
    </div>
  );
}
