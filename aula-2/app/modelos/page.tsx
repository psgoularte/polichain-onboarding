import Card from "@/components/Card";

export default function Modelos() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-8 w-full max-w-3xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Modelos Favoritos</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          Phasellus molestie magna.
        </p>
        <div className="h-px bg-white my-8 w-full mt-16 mb-16"></div>

        {/*Card Les Paul*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#1"
            nome="Gibson Les Paul"
            ano="1958"
            captacao="Humbercker"
            ponte="Fixa"
            pontoForte="Sustain e Tom Aveludado"
            artistas="Slash, Jimmy Page"
            imageUrl="/LesPaul.png"
          />
        </div>

        {/*Card SG*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#2"
            nome="Gibson SG"
            ano="1961"
            captacao="Humbucker"
            ponte="Fixa"
            pontoForte="Leveza e acesso aos trastes"
            artistas="Angus Young, Tony Iommi"
            imageUrl="/SG.png"
          />
        </div>
      </div>
    </div>
  );
}
