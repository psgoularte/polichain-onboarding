import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const updated = await prisma.item.update({ where: { id }, data: { name } });
  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.item.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
