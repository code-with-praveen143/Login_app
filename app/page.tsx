import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="bg-pink-200">
      <ul className="flex flex-row justify-center gap-4 p-4">
        <li className="text-black">
          <Link href='/login'>Login</Link>
        </li>
        <li className="text-black">  
          <Link href='/register'>Register</Link>
        </li>
      </ul>
    </div>
    <h1 className="font-sans font-bold text-red-500 text-xl text-center pt-4">Main Page</h1>
    </div>
  );
}
