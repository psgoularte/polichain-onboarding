import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-neutral-800 fixed top-0 left-0 right-0 z-50 shadow-sm rounded-xl">
      <div className="container ml-4 p-3">
        <Link href="/" className="flex items-center">
          <div className="text-black-800 hover:text-black-900 font-bold transition-colors duration-300 cursor-pointer">
            <h1 className="text-xl hover:text-neutral-600 duration-300 ease-in-out sm:text-2xl font-[family-name:var(--font-geist-sans)]">
              Site do Pedro
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
}
