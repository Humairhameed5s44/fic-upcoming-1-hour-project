import Link from "next/link"


export default function Navbar() {
  return (
    <div className="bg-cyan-600 text-gray-700 hover:bg-black hover:text-yellow-400">

      
      {/* Navbar links centered */}
      <nav className="flex justify-center items-center space-x-8 py-4">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <span>|</span>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <span>|</span>
        <Link href="/Contacts" className="hover:text-yellow-400">Location</Link>
      </nav>
    </div>
  )
}
