import Link from "next/link";
import { NewMoonFace } from "./icons/Twemoji";

export function NavBar() {
  return (
    <div className="mb-16">
      <nav className="flex justify-between py-4">
        <Link href="/">
          <a className="no-underline cursor-pointer text-4xl" aria-label="home">
            <NewMoonFace />
          </a>
        </Link>
        {/* <div>TODO: Dark mode toggle</div> */}
      </nav>
    </div>
  );
}
