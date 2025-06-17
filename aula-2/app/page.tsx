"use client";

import ImageButton from "@/components/Button";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {}
      <div className="mt-8 w-full max-w-3xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Sobre o Site</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          A ideia do site é fazer uma espécie de ode à guitarra junto de minhas
          preferências dentro desse mundo. A seguir, você pode acessar outras 3
          páginas: uma explicando um pouco sobre a história desse instrumento,
          outra sobre os modelos que mais admiro e por fim uma lista dos álbuns
          que mais me influenciaram que contam com uma presença marcante da
          guitarra.
        </p>
        <div className="h-px bg-white my-8 w-full mt-16 mb-16"></div>

        {/*Botão História*/}
        <div className="pt-6 flex justify-center">
          <ImageButton
            imageUrl="/jimi-hendrix.jpg"
            linkUrl="/historia"
            buttonText="História"
          />
        </div>

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
      </div>
    </div>
  );
}
