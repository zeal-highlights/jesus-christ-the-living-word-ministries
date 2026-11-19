import Reveal from "./Reveal.jsx";

/**
 * Big numbered rows: a number (or icon), a large title and a short description.
 * Each item is { title, description, icon? }; `icon` is a node shown instead of the number.
 */
export default function NumberedRows({ items, withIcons = false }) {
  return (
    <Reveal as="ol" className={withIcons ? "numbered-rows numbered-rows-icons" : "numbered-rows"}>
      {items.map((item, index) => (
        <li key={item.title}>
          <span>{withIcons ? item.icon : String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </Reveal>
  );
}
