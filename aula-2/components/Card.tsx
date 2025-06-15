// components/Card.tsx
import Image from "next/image";

interface CardProps {
  rank: string;
  nome: string;
  ano: string;
  captacao: string;
  ponte: string;
  pontoForte: string;
  artistas: string;
  imageUrl: string;
}

export default function Card({
  rank,
  nome,
  ano,
  captacao,
  ponte,
  pontoForte,
  artistas,
  imageUrl,
}: CardProps) {
  return (
    <div className="w-full max-w-4xl border-2 border-white rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Seção da Imagem (Esquerda) */}
      <div className="w-full md:w-1/3 relative h-64 md:h-auto">
        <Image
          src={imageUrl}
          alt={`Capa ${nome}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Seção de Texto (Direita) */}
      <div className="w-full md:w-2/3 p-6 space-y-4">
        <div className="relative w-full">
          <h2 className="text-2xl font-bold text-center">{nome}</h2>
          <span className="absolute right-0 top-0 bg-white text-neutral-900 px-3 py-1 rounded-full text-sm font-bold">
            {rank}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="Ano" value={ano} />
          <InfoItem label="Captação" value={captacao} />
          <InfoItem label="Ponte" value={ponte} />
          <InfoItem label="Ponto Forte" value={pontoForte} />
        </div>

        <div className="pt-2">
          <InfoItem label="Artistas" value={artistas} />
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para os itens de informação
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
