import Card from "@/components/Card";

export default function Modelos() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-8 w-full max-w-3xl text-center space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Modelos Favoritos</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          O principal objeto desta seção é destacar meus modelos guitarras
          fevoritos, destacando suas princiapis características e os maiores
          guitarristas que usaram elas. Seu rankeamento está de acordo com minha
          ordem de preferência.
        </p>
        <div className="h-px bg-white my-8 w-full mt-16 mb-16"></div>

        {/*Card Les Paul*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#1"
            nome="Gibson Les Paul"
            ano="1958"
            captacao="Humbucker"
            ponte="Fixa"
            pontoForte="Sustain e Tom Aveludado"
            artistas="Slash, Jimmy Page, Zack Wylde"
            imageUrl="/LesPaul.png"
          />
        </div>

        {/*Card JEM*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#2"
            nome="Ibanez JEM"
            ano="1985"
            captacao="DiMarzio"
            ponte="Floyd Rose"
            pontoForte="Braço Wizard"
            artistas="Steve Vai, Joe Satriani"
            imageUrl="/JEM.png"
          />
        </div>

        {/*Card SG*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#3"
            nome="Gibson SG"
            ano="1961"
            captacao="Humbucker"
            ponte="Fixa"
            pontoForte="Leveza e acesso aos trastes"
            artistas="Angus Young, Tony Iommi"
            imageUrl="/SG.png"
          />
        </div>

        {/*Card Fender Stratocaster*/}
        <div className="w-full flex justify-center">
          <Card
            rank="#4"
            nome="Fender Stratocaster"
            ano="1954"
            captacao="Single-coil"
            ponte="Tremolo"
            pontoForte="Versatilidade tonal"
            artistas="Jimi Hendrix, Eric Clapton, Malmsteen"
            imageUrl="/Stratocaster.png"
          />
        </div>

        {/*Card */}
        <div className="w-full flex justify-center">
          <Card
            rank="#5"
            nome="Gibson Flying V"
            ano="1958"
            captacao="Humbucker"
            ponte="Fixa"
            pontoForte="Design icônico e projeção"
            artistas=" Jimi Hendrix, Kirk Hammett, Dave Mustaine"
            imageUrl="/flying-v.png"
          />
        </div>
      </div>
    </div>
  );
}
