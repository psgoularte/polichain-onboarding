// components/ImageButton.tsx
import Link from "next/link";
import Image from "next/image";

interface ImageButtonProps {
  imageUrl: string;
  linkUrl: string;
  buttonText: string;
}

export default function ImageButton({
  imageUrl,
  linkUrl,
  buttonText,
}: ImageButtonProps) {
  return (
    <Link href={linkUrl} passHref>
      <div
        className="
        flex items-center justify-between
        w-[500px]
        h-24
        bg-neutral-900
        hover:border-neutral-700
        border-2 border-white
        rounded-l-lg  // Lado esquerdo arredondado
        rounded-r-lg    // Lado direito arredondado
        p-6
        shadow-lg hover:shadow-xl
        transition-all duration-200
        cursor-pointer
        group
        mx-auto
      "
      >
        <span
          className="
          text-3xl
          font-extrabold
          text-gray-100
          group-hover:text-neutral-700
          transition-colors duration-200
          ml-6
          mr-8         // Espaçamento reduzido para aproximar a imagem
        "
        >
          {buttonText}
        </span>

        <div
          className="
          relative
          w-20 h-20
          rounded-r-none  // Remove arredondamento direito
          overflow-hidden
          border-l-4 border-gray-300  // Borda apenas à esquerda
          group-hover:border-neutral-700
          transition-all duration-200
          flex-shrink-0
          -mr-6         // Empurra a imagem para fora do container
        "
        >
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Link>
  );
}
