"use client";

import Timeline from "@/components/TimeLine";

export default function GuitarHistory() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-justify text-lg leading-relaxed">
      <div className="mt-16">
        <h1 className="text-4xl font-bold text-center mb-10">
          A Guitarra Moderna e sua História
        </h1>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Breve Introdução Histórica
        </h2>
        <p>
          Embora a origem da guitarra remonte a instrumentos de cordas usados
          por civilizações antigas e tenha evoluído ao longo dos séculos por
          meio de modelos como a <em>vihuela</em> renascentista e o violão
          clássico espanhol, foi no século XX que a guitarra encontrou sua forma
          mais revolucionária: a <strong>guitarra elétrica</strong>. Esse salto
          não foi apenas técnico, mas simbólico — a guitarra deixou de ser
          apenas um instrumento acústico de acompanhamento e tornou-se
          protagonista na transformação da música e da cultura global.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4 mt-10">
          Linha do Tempo
        </h2>
        <Timeline />
      </section>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4 mt-16">
          A Invenção da Guitarra Elétrica
        </h2>
        <p>
          Na década de 1930, surgiram os primeiros modelos de guitarras
          elétricas, com <strong>captadores magnéticos</strong> capazes de
          transformar vibrações das cordas em sinais elétricos. Essa inovação
          resolveu um problema antigo: o volume limitado do violão em ambientes
          maiores ou junto a outros instrumentos. Um dos marcos iniciais foi a
          criação da <em>Frying Pan</em> (frigideira), desenvolvida por{" "}
          <strong>George Beauchamp</strong> e{" "}
          <strong>Adolph Rickenbacker</strong> — um instrumento rudimentar, mas
          essencial para o futuro do rock.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          O Corpo Sólido e o Surgimento dos Ícones
        </h2>
        <p>
          Nos anos 1950, a guitarra elétrica ganhou sua forma definitiva com o
          advento dos <strong>corpos sólidos</strong>.{" "}
          <strong>Leo Fender</strong> revolucionou o mercado ao lançar a{" "}
          <em>Telecaster</em>, seguida da <em>Stratocaster</em>, com design
          moderno, ponte tremolo e três captadores. A resposta da Gibson veio
          com a parceria com <strong>Les Paul</strong>, resultando em um modelo
          mais robusto, com captadores <em>humbucker</em> e um som mais
          encorpado — características perfeitas para o <strong>blues</strong> e
          o <strong>rock</strong> que emergiam naquele momento.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Anos 60 e 70: A Era dos Heróis da Guitarra
        </h2>
        <p>
          Com o crescimento do rock nos anos 1960 e 70, a guitarra elétrica
          tornou-se símbolo de <strong>rebeldia</strong>,{" "}
          <strong>liberdade</strong> e <strong>expressão pessoal</strong>.
          Guitarristas como <strong>Jimi Hendrix</strong>,{" "}
          <strong>Jimmy Page</strong>, <strong>Eric Clapton</strong> e{" "}
          <strong>Carlos Santana</strong> não apenas dominaram o instrumento —
          eles moldaram seu som. O uso de <strong>pedais de efeito</strong>,
          amplificadores potentes e técnicas como o <strong>feedback</strong> e
          a <strong>alavanca</strong> transformaram a guitarra em algo quase
          mágico, com sons antes inimagináveis.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          A Guitarra nos Anos 80, 90 e 2000
        </h2>
        <p>
          Nas décadas seguintes, a guitarra elétrica acompanhou a diversidade
          musical. Nos anos 80, com o <strong>heavy metal</strong> e o{" "}
          <strong>hard rock</strong>, surgiram guitarras <em>superstrat</em>,
          com captadores potentes e trastes extras. Guitarristas como{" "}
          <strong>Eddie Van Halen</strong> e <strong>Steve Vai</strong> levaram
          a técnica ao extremo, com solos velozes e virtuosismo. Já nos anos 90,
          com o <strong>grunge</strong> e o <strong>indie</strong>, a guitarra
          voltou ao básico, com distorções mais cruas e melodias melancólicas.
          Bandas como <strong>Nirvana</strong> e <strong>Radiohead</strong>{" "}
          mostraram que simplicidade e emoção também têm potência.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          A Guitarra Hoje
        </h2>
        <p>
          Hoje, a guitarra continua sendo um dos instrumentos mais{" "}
          <strong>populares</strong> e <strong>versáteis</strong> do mundo.
          Modelos <strong>digitais</strong> e <strong>híbridos</strong> permitem
          explorar sons futuristas. Guitarras <strong>sustentáveis</strong> e
          feitas por <strong>impressoras 3D</strong> apontam para um futuro
          ecológico. Plataformas digitais, <strong>plugins</strong> e
          sintetizadores virtuais expandem as possibilidades sonoras. Ao mesmo
          tempo, o fascínio pelos modelos vintage e pela{" "}
          <strong>construção artesanal</strong> mostra que tradição e inovação
          convivem lado a lado.
        </p>
        <p className="mt-4">
          Mais do que um instrumento musical, a guitarra moderna é uma{" "}
          <strong>ferramenta de identidade</strong>. Seja nas mãos de um músico
          de quarto com um violão simples ou de um guitarrista de estádio com
          uma máquina feita sob medida, a guitarra continua expressando emoções,
          ideias e histórias de forma única.
        </p>
      </div>
    </div>
  );
}
