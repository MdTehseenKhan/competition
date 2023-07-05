import Link from "next/link"
import { MouseEventHandler } from "react"
import { usePathname } from "next/navigation"

import { List, ListItem } from "@material-tailwind/react"

import { menuItems } from "@/constants"

const NavList = ({ handleCloseNav }: { handleCloseNav?: MouseEventHandler }) => {
  const pathname = usePathname()

  return (
    <List className="mb-4 flex flex-col md:flex-row md:mb-0">
      {menuItems?.map(({ title, link }, i) => (
        //
        <Link key={i + title} href={link} onClick={handleCloseNav}>
          <ListItem
            className={`
              px-4 py-2
              ${pathname == link ? `bg-primary text-white md:bg-transparent md:text-black font-bold` : ""}
            `}
          >
            {title}
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default NavList
