import AlbumCard from "@/components/AlbumCard";

export default function Obras() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-8 w-full max-w-3xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Obras Favoritas</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          O principal objeto desta seção é destacar as obras que mais me
          influenciaram e trazer aglumas informações, destacando o guitarrista
          que trabalhou no projeto e qual modelo de guitarra foi usado. Seu
          rankeamento não tem uma ordem de preferência como a de modelos, acho
          incorreto fazer comparações aqui.
        </p>
        <div className="h-px bg-white my-8 w-full mt-16 mb-16"></div>

        <AlbumCard
          rank="#1"
          nome="Dark Side of the Moon"
          artista="Pink Floyd"
          ano="1973"
          estilo="Psicodélco / Progressivo"
          guitarristas="David Gilmour"
          guitarraUsada="Fender Stratocaster '57"
          imageUrl="/Dark_side_of_the_Moon.png"
        />

        <AlbumCard
          rank="#2"
          nome="Paranoid"
          artista="Black Sabbath"
          ano="1970"
          estilo="Heavy Metal"
          guitarristas="Tony Iommi"
          guitarraUsada="Gibson SG Special '65"
          imageUrl="/Paranoid.png"
        />

        <AlbumCard
          rank="#3"
          nome="Rust in Peace"
          artista="Megadeth"
          ano="1990"
          estilo="Thrash Metal"
          guitarristas="Marty Friedman, Dave Mustaine"
          guitarraUsada="Jackson Kelly, Jackson King V"
          imageUrl="/RustInPeace.webp"
        />

        <AlbumCard
          rank="#4"
          nome="Ride the Lightning"
          artista="Metallica"
          ano="1984"
          estilo="Thrash Metal"
          guitarristas="Kirk Hammett, James Hetfield"
          guitarraUsada="Gibson Flying V, Gibson Explorer"
          imageUrl="/RideTheLightning.webp"
        />

        <AlbumCard
          rank="#5"
          nome="Led Zeppelin IV"
          artista="Led Zeppelin"
          ano="1971"
          estilo="Hard Rock/Blues Rock"
          guitarristas="Jimmy Page"
          guitarraUsada="Gibson Les Paul '59"
          imageUrl="/LedZeppelinIV.jpg"
        />
      </div>
    </div>
  );
}
