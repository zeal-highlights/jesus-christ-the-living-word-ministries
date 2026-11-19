import Reveal from "./Reveal.jsx";

/** Rounded navy card with a small label, a title and a short text. `tone="deep"` uses the darker navy. */
export default function InfoCard({ label, title, tone, children }) {
  return (
    <Reveal as="div" className={tone === "deep" ? "info-card info-card-deep" : "info-card"}>
      <small>{label}</small>
      <h3>{title}</h3>
      {typeof children === "string" || Array.isArray(children) ? <p>{children}</p> : children}
    </Reveal>
  );
}
