"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Kombinerad logik för scroll och sid-detektering
    useEffect(() => {
        const handleScroll = () => {
            // Om vi är på startsidan ("/"), kontrollera scroll-position
            // Om vi är på en undersida (t.ex. "/about"), tvinga "scrolled" till true direkt
            if (pathname === "/") {
                setScrolled(window.scrollY > 50);
            } else {
                setScrolled(true);
            }
        };

        // Kör direkt vid sidladdning/sidbyte
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]); // Viktigt: Körs om när pathname ändras

    // Stäng menyn om man ändrar fönsterstorlek till desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Funktion för att hantera klick på ankarlänkar (smooth scroll på startsidan)
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        // Om vi är på startsidan, kör vi manuell smooth scroll
        if (pathname === "/") {
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault(); // Detta MÅSTE köras för att stoppa hoppet
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        } 
        // Om vi INTE är på startsidan, låt Link göra sitt jobb (navigera till /#id)
        
        setIsOpen(false); 
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
                    <div className={styles.logoText}>
                        BYGG & MÅLERI <span>AB</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopLinks}>
                    <Link
                        href="/#tjanster"
                        className={styles.navLink}
                        onClick={(e) => handleNavClick(e, "tjanster")} // Skicka med ID:t på sektionen
                    >
                        Tjänster
                    </Link>

                    <Link
                        href="/about"
                        className={styles.navLink}
                        onClick={(e) => handleNavClick(e, "about")} // Skicka med ID:t på sektionen
                    >
                        Om oss
                    </Link>

                    <Link
                        href="/#offert"
                        className={styles.ctaBtn}
                        onClick={(e) => handleNavClick(e, "offert")}
                    >
                        Få offert
                    </Link>
                </div>

                {/* Hamburgarknapp */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Meny"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobilmeny Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.mobileOverlay}
                    >
                        <div className={styles.mobileLinks}>
                            <Link
                                href="/#tjanster"
                                onClick={(e) => handleNavClick(e, "tjanster")}
                            >
                                Tjänster
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                            >
                                Om oss
                            </Link>
                            <Link
                                href="/#offert"
                                className={styles.mobileCta}
                                onClick={(e) => handleNavClick(e, "offert")}
                            >
                                Få gratis offert
                            </Link>

                            <div className={styles.mobileContactInfo}>
                                <p>info@byggforetaget.se</p>
                                <p>044-123 45 67</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}