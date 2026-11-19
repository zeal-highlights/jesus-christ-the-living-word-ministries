import { useEffect, useRef, useState } from "react";

/** Fades its children in the first time they scroll into view. */
export default function Reveal({ as: Tag = "div", className = "", children, ...props }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", isVisible && "is-visible", className].filter(Boolean).join(" ");
  return (
    <Tag ref={elementRef} className={classes} {...props}>
      {children}
    </Tag>
  );
}
