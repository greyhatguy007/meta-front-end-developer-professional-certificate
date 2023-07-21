import { useState, useRef, useEffect, FC, HTMLAttributes, MutableRefObject } from "react";
import { Container, Content } from "./styles";
import Nav from "../Nav";
import MobileNav from "../MobileNav";

const Header: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const headerRef: MutableRefObject<HTMLElement | null> = useRef(null);
  const [_, setLastScrollPosition] = useState(window.pageYOffset || document.documentElement.scrollTop);

  const handleScroll = () => {
    const header = headerRef.current;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollPosition((prevState) => {
      if (!header) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        header.style.transform = "translateY(-200px)";
      } else {
        header.style.transform = "translateY(0)";
      };
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container {...props} ref={headerRef}>
      <Content>
        <Nav />
        <MobileNav />
      </Content>
    </Container>
  );
};

export default Header;