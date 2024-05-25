import { links } from "@/constants";
import NavMenu from "./NavMenu";
function Nav() {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
        <NavMenu path={link.path} name={link.name} key={index} />
        );
      })}
    </nav>
  );
}

export default Nav;
