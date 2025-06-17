// components/AlbumCard.tsx
import Image from "next/image";

interface AlbumCardProps {
  rank: string;
  nome: string;
  artista: string;
  ano: string;
  estilo: string;
  guitarristas: string;
  guitarraUsada: string;
  imageUrl: string;
}

export default function AlbumCard({
  rank,
  nome,
  artista,
  ano,
  estilo,
  guitarristas,
  guitarraUsada,
  imageUrl,
}: AlbumCardProps) {
  return (
    <div className="w-full max-w-4xl border-2 border-white rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Seção da Imagem */}
      <div className="w-full md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={imageUrl}
          alt={`Capa ${nome}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Seção de Texto*/}
      <div className="w-full md:w-2/3 p-6 space-y-4">
        {/* Cabeçalho com título*/}
        <div className="relative text-center">
          {" "}
          {/* Container relativo */}
          <h2 className="text-2xl font-bold inline-block">{nome}</h2>{" "}
          {/* Título*/}
          <span className="absolute right-0 top-0 bg-white text-neutral-900 px-3 py-1 rounded-full text-sm font-bold">
            {rank}
          </span>
        </div>

        {/* Grid de informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Artista" value={artista} />
          <InfoItem label="Ano" value={ano} />
          <InfoItem label="Estilo" value={estilo} />
          <InfoItem label="Guitarristas" value={guitarristas} />

          {/* Guitarra Usada centralizada */}
          <div className="md:col-span-2 text-center">
            {" "}
            {/* Container full-width */}
            <InfoItem
              label="Guitarra Usada"
              value={guitarraUsada}
              className="inline-block text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
