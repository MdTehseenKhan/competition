import Link from "next/link"
import { MouseEventHandler } from "react"
import { usePathname } from "next/navigation"

import { List, ListItem } from "@material-tailwind/react"

import { menuItems } from "@/constants"

const NavList = ({ handleCloseNav }: { handleCloseNav?: MouseEventHandler }) => {
  const pathname = usePathname()

  return (
    <List className="flex flex-col md:flex-row px-0">
      {menuItems?.map(({ title, link }, i) => (
        //
        <Link key={i + title} href={link} onClick={handleCloseNav}>
          <ListItem
            className={`
              px-4 py-2 uppercase text-sm
              ${pathname == link ? `bg-primary text-white md:bg-transparent md:text-gray-900 font-bold` : ""}
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
