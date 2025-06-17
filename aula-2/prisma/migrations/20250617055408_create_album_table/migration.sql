-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "guitarrist" TEXT NOT NULL,
    "guitar" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guitar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "pickups" TEXT NOT NULL,
    "bridge" TEXT NOT NULL,
    "highlight" TEXT NOT NULL,
    "artists" TEXT NOT NULL,
    "imageurl" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "Guitar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guitar_rank_key" ON "Guitar"("rank");
