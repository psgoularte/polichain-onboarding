import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const { name } = await request.json();
  const item = await prisma.item.create({ data: { name } });
  return NextResponse.json(item, { status: 201 });
}
