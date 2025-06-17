"use client";

import Card from "@/components/Card";
import { useEffect, useState } from "react";

interface Guitar {
  id: number;
  name: string;
  year: number;
  pickups: string;
  bridge: string;
  highlight: string;
  artists: string;
  imageurl: string;
}

export default function Modelos() {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuitars = async () => {
      try {
        const response = await fetch("/api/guitars");
        const data = await response.json();
        setGuitars(data);
      } catch (error) {
        console.error("Error fetching guitars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuitars();
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
        <h1 className="text-3xl sm:text-4xl font-bold">Modelos Favoritos</h1>
        <p className="text-base sm:text-lg font-normal text-justify">
          O principal objeto desta seção é destacar meus modelos de guitarras
          favoritos, destacando suas principais características e os maiores
          guitarristas que usaram elas. Seu rankeamento está de acordo com minha
          ordem de preferência.
        </p>
        <div className="h-px bg-white my-8 w-full mt-16 mb-16"></div>

        {guitars.map((guitar, index) => (
          <div key={guitar.id} className="w-full flex justify-center">
            <Card
              rank={`#${index + 1}`}
              nome={guitar.name}
              ano={guitar.year.toString()}
              captacao={guitar.pickups}
              ponte={guitar.bridge}
              pontoForte={guitar.highlight}
              artistas={guitar.artists}
              imageUrl={guitar.imageurl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
