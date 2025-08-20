import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.svg" width={128} height={38} alt="Evently Logo"/>
        </Link>

        <div className="flex w-32 justify-end gap-3">
          
        </div>
      </div>
    </>
  )
}

export default Header