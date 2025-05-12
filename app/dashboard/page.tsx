import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Link href="http://localhost:3000">
        <button className="btn overflow-hidden relative w-50 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
          Go to LogIn
        </button>
      </Link>
      <br />
      <br />
      <Link href="/register">
        <button className="btn overflow-hidden relative w-50 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
          Go to Register
        </button>
      </Link>
    </main>
  );
}
