import { useState, useEffect, useRef, useCallback } from "react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Notification from "./Notification";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const fullText = "Informatics Student | Web Developer | Digital Creative";

  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbldkkea", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setNotification({
          isVisible: true,
          message: "Message sent successfully. I'll get back to you soon.",
          type: "success",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      setNotification({
        isVisible: true,
        message: "Message failed to send. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    portfolio: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMenuOpen(false);
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }, 100);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(
      100,
      Math.max(0, (window.scrollY / totalScroll) * 100),
    );
    setScrollProgress(progress);

    Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    Object.keys(sectionRefs).forEach((sectionId) => {
      sectionRefs[sectionId].current = document.getElementById(sectionId);
    });
  }, []);

  // Typing effect for the terminal hero
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] overflow-x-hidden">
      <CustomCursor />
      <Background />

      <Nav
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        scrollProgress={scrollProgress}
      />

      <Hero
        sectionRef={sectionRefs.home}
        typedText={typedText}
        scrollToSection={scrollToSection}
      />
      <Skills sectionRef={sectionRefs.skills} />
      <Portfolio sectionRef={sectionRefs.portfolio} />
      <Experience sectionRef={sectionRefs.experience} />
      <Contact
        sectionRef={sectionRefs.contact}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Footer />

      <Notification
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={handleCloseNotification}
      />
    </div>
  );
}

export default App;
