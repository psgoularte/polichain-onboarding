"use client";

import { useState } from "react";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: string;
};

const events: TimelineEvent[] = [
  {
    year: "1930",
    title: "Nascimento da Guitarra Elétrica",
    description:
      "Criação da 'Frying Pan' por Rickenbacker, primeiro modelo elétrico comercial",
    icon: "🎸",
  },
  {
    year: "1950",
    title: "Era dos Corpos Sólidos",
    description: "Lançamento da Fender Telecaster e Gibson Les Paul",
    icon: "⚡",
  },
  {
    year: "1960",
    title: "Revolução do Rock",
    description:
      "Jimi Hendrix e outros elevam a guitarra à protagonista musical",
    icon: "🎶",
  },
  {
    year: "1980",
    title: "Era do Virtuosismo",
    description: "Eddie Van Halen populariza técnicas como tapping",
    icon: "🔥",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative my-12 mx-auto max-w-4xl">
      {" "}
      {/* Container centralizado */}
      {/* Linha central visível */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-500 transform -translate-x-1/2 z-0"></div>
      {/* Container dos eventos */}
      <div className="relative space-y-16 z-10">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-start`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Ano */}
            <div className="w-1/2 px-4">
              <div
                className={`text-3xl font-bold transition-all duration-300 ${
                  activeIndex === index
                    ? "text-neutral-100 scale-105"
                    : "text-neutral-400"
                }`}
              >
                {event.year}
              </div>
            </div>

            {/* Card do Evento */}
            <div className="w-1/2 px-4">
              <div
                className={`p-4 border rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? "border-neutral-300 bg-neutral-800"
                    : "border-neutral-600 bg-neutral-900"
                }`}
              >
                <div className="text-2xl mb-2">{event.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  {event.title}
                </h3>
                <p className="text-neutral-400 text-sm">{event.description}</p>
              </div>
            </div>

            {/* Ponto na linha */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                activeIndex === index
                  ? "border-neutral-300 bg-neutral-700"
                  : "border-neutral-500 bg-neutral-800"
              } transition-all duration-300 z-20`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
