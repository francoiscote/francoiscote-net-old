import Link from "next/link";
import { motion } from "framer-motion";
import { NewMoonFace } from "./icons/Twemoji";

export function NavBar() {
  const linkVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 0.9,
    },
    pressed: {
      scale: 1.1,
    },
  };

  return (
    <div className="mb-16">
      <nav className="flex justify-between py-4">
        <motion.div
          initial={{ y: "-200%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover="hover"
          whileTap="pressed"
        >
          <Link href="/" passHref>
            <motion.a className="text-4xl" aria-label="home">
              <motion.div variants={linkVariants}>
                <NewMoonFace />
              </motion.div>
            </motion.a>
          </Link>
        </motion.div>
        {/* <div>TODO: Dark mode toggle</div> */}
      </nav>
    </div>
  );
}
