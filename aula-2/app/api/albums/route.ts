import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

// GET - Listar todos os álbuns
export async function GET() {
  try {
    const albums = await prisma.album.findMany({ orderBy: { id: "asc" } });
    return NextResponse.json(albums);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST - Criar novo álbum
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newAlbum = await prisma.album.create({ data });
    return NextResponse.json(newAlbum, { status: 201 });
  } catch (error) {
    console.error("Creation error:", error);
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

// DELETE - Remover um álbum por ID
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json(); // Recebe o ID do álbum a ser deletado

    if (!id) {
      return NextResponse.json(
        { error: "ID do álbum é obrigatório" },
        { status: 400 }
      );
    }

    const deletedAlbum = await prisma.album.delete({
      where: { id: Number(id) }, // Converte para número (caso o ID seja string)
    });

    return NextResponse.json(deletedAlbum, { status: 200 });
  } catch (error) {
    console.error("Deletion error:", error);

    // Verifica se o álbum não foi encontrado
    if (
      error instanceof Error &&
      error.message.includes("Record to delete does not exist")
    ) {
      return NextResponse.json(
        { error: "Álbum não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// PUT - Atualizar um álbum por ID
export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json(); // Extrai o ID e os dados a serem atualizados

    if (!id) {
      return NextResponse.json(
        { error: "ID do álbum é obrigatório" },
        { status: 400 }
      );
    }

    const updatedAlbum = await prisma.album.update({
      where: { id: Number(id) }, // Converte para número (caso o ID seja string)
      data,
    });

    return NextResponse.json(updatedAlbum, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);

    // Verifica se o álbum não foi encontrado
    if (
      error instanceof Error &&
      error.message.includes("Record to update does not exist")
    ) {
      return NextResponse.json(
        { error: "Álbum não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
