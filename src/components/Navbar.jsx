import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    };
  }, [isOpen]);

  const links = ["Services", "Portfolio", "About", "Process", "Contact"];

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 76; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close menu first
    setIsOpen(false);
    
    // Scroll to section after a small delay
    const sectionId = link.toLowerCase();
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  const handleCTAClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close menu first
    setIsOpen(false);
    
    // Scroll to contact section
    setTimeout(() => {
      scrollToSection("contact");
    }, 300);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <motion.header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          background: scrolled || isOpen
            ? "rgba(255,255,255,0.98)"
            : "transparent",
          backdropFilter: scrolled || isOpen ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || isOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || isOpen ? "1px solid #EAE6E1" : "1px solid transparent",
          boxShadow: scrolled || isOpen ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px)",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "clamp(64px, 8vw, 76px)",
          }}>
            {/* Logo */}
            <a 
              href="#" 
              onClick={handleLogoClick}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "12px", 
                textDecoration: "none",
                zIndex: 51,
              }} 
              className="group"
            >
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "#FF6B2C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(255,107,44,0.2)",
              }}>
                <span style={{
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "'DM Sans', sans-serif",
                  position: "relative",
                  zIndex: 10,
                }}>NK</span>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "#E5520E",
                  transform: "scale(0)",
                  transition: "transform 0.3s ease",
                  borderRadius: "12px",
                }} className="group-hover-logo-bg" />
              </div>
              <span
                style={{
                  color: "#0A0A0A",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  fontSize: "17px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Nk Dev<span style={{ color: "#FF6B2C" }}>.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav style={{
              display: "none",
              alignItems: "center",
              gap: "clamp(24px, 4vw, 32px)",
            }} className="desktop-nav">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    color: "#4A4540",
                    fontWeight: 500,
                    fontSize: "15px",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s ease",
                    cursor: "pointer",
                  }}
                  className="nav-link"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {link}
                  <span className="nav-underline" />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.div
              style={{
                display: "none",
                alignItems: "center",
                gap: "16px",
              }}
              className="desktop-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                onClick={handleCTAClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FF6B2C",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 2px 8px rgba(255,107,44,0.2)",
                  cursor: "pointer",
                }}
                className="cta-button"
              >
                Start Project
                <ArrowRight size={14} style={{ transition: "transform 0.3s ease" }} className="cta-arrow" />
              </a>
            </motion.div>

            {/* Mobile toggle */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                background: "none",
                border: "none",
                color: "#0A0A0A",
                cursor: "pointer",
                transition: "color 0.3s ease",
                zIndex: 51,
              }}
              className="mobile-toggle"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#FFFFFF",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(80px, 10vw, 100px) clamp(24px, 5vw, 32px) clamp(32px, 5vw, 48px)",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(24px, 4vw, 32px)",
              width: "100%",
              maxWidth: "400px",
            }}>
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    color: "#0A0A0A",
                    fontWeight: 600,
                    fontSize: "clamp(24px, 4vw, 32px)",
                    textDecoration: "none",
                    textAlign: "center",
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    position: "relative",
                    paddingBottom: "12px",
                    cursor: "pointer",
                    display: "inline-block",
                    width: "100%",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link}
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "40px",
                    height: "2px",
                    background: "#FF6B2C",
                    borderRadius: "1px",
                    opacity: 0.3,
                  }} />
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={handleCTAClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "#FF6B2C",
                  color: "#FFFFFF",
                  width: "100%",
                  maxWidth: "280px",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  marginTop: "8px",
                  boxShadow: "0 4px 16px rgba(255,107,44,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Project <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        
        /* Underline animation for desktop */
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF6B2C;
          border-radius: 1px;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: #FF6B2C !important;
        }
        
        .nav-link:hover .nav-underline {
          width: 100%;
        }
        
        /* CTA button hover */
        .cta-button:hover {
          background: #E5520E !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(255,107,44,0.3) !important;
        }
        
        .cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }
        
        /* Logo hover */
        .group:hover .group-hover-logo-bg {
          transform: scale(1) !important;
        }
      `}</style>
    </>
  );
}