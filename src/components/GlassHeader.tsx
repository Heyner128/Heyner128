import ThemeToggle from "./ui/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslatedContent } from "@/lib/hooks";
import LanguageSelector from "./ui/language-selector";

type MenuItem = {
  text: string;
  link: string;
}

export default function GlassHeader() {

  const { titles } = useTranslatedContent();

  const { experience, skills, projects, education, home } = titles;
  const MENU_ITEMS: MenuItem[] = [
    { text: home, link: "/" },
    { text: experience, link: "/#experience" },
    { text: skills, link: "/#skills" },
    { text: projects, link: "/#projects" },
    { text: education, link: "/#education" },
    { text: "Blog", link: "/blog" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {MENU_ITEMS.map(
            (item, index) => (
              <motion.a
                key={item.link}
                href={item.link}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSelector />

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {MENU_ITEMS.map(
                (item, index) => (
                  <motion.a
                    key={item.link}
                    href={item.link}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
