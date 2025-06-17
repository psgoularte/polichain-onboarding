"use client";

import AlbumCard from "@/components/AlbumCard";
import { useEffect, useState } from "react";

interface Album {
  id: number;
  name: string;
  artist: string;
  year: number;
  genre: string;
  guitarrist: string;
  guitar: string;
  imageurl: string;
}

export default function Obras() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("/api/albums");
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="flex text-3xl sm:text-4xl font-bold justify-center items-center min-h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

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

        {albums.map((album, index) => (
          <AlbumCard
            key={album.id}
            rank={`#${index + 1}`}
            nome={album.name}
            artista={album.artist}
            ano={album.year.toString()}
            estilo={album.genre}
            guitarristas={album.guitarrist}
            guitarraUsada={album.guitar}
            imageUrl={album.imageurl}
          />
        ))}
      </div>
    </div>
  );
}
