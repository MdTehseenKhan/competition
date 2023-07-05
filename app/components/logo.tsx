import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/" className="relative w-12 h-12">
      <Image src="/images/rcai-logo.png" alt="Logo" fill className="object-contain" />
    </Link>
  )
}

export default Logo
