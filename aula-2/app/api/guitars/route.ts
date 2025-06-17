// app/api/guitars/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

// GET - Listar todas as guitarras (ordenadas por rank)
export async function GET() {
  try {
    const guitars = await prisma.guitar.findMany({
      orderBy: { rank: "asc" },
    });
    return NextResponse.json(guitars);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST - Criar nova guitarra
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Verificar se o rank já está em uso
    const existingGuitar = await prisma.guitar.findUnique({
      where: { rank: data.rank },
    });

    if (existingGuitar) {
      return NextResponse.json(
        { error: "Rank já está em uso" },
        { status: 400 }
      );
    }

    const newGuitar = await prisma.guitar.create({ data });
    return NextResponse.json(newGuitar, { status: 201 });
  } catch (error) {
    console.error("Creation error:", error);
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

// DELETE - Remover uma guitarra por ID
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID da guitarra é obrigatório" },
        { status: 400 }
      );
    }

    const deletedGuitar = await prisma.guitar.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedGuitar, { status: 200 });
  } catch (error) {
    console.error("Deletion error:", error);

    if (
      error instanceof Error &&
      error.message.includes("Record to delete does not exist")
    ) {
      return NextResponse.json(
        { error: "Guitarra não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT - Atualizar uma guitarra por ID
export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID da guitarra é obrigatório" },
        { status: 400 }
      );
    }

    // Se estiver tentando alterar o rank, verificar se já existe
    if (data.rank) {
      const existingGuitar = await prisma.guitar.findFirst({
        where: {
          rank: data.rank,
          NOT: { id: Number(id) },
        },
      });

      if (existingGuitar) {
        return NextResponse.json(
          { error: "Rank já está em uso por outra guitarra" },
          { status: 400 }
        );
      }
    }

    const updatedGuitar = await prisma.guitar.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedGuitar, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);

    if (
      error instanceof Error &&
      error.message.includes("Record to update does not exist")
    ) {
      return NextResponse.json(
        { error: "Guitarra não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
