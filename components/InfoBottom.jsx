//components//InfoBottom.jsx
import Actions from "./Actions";
import Info from "./Info";

export default function InfoBottom({ article }) {
  const subsection =
    typeof article.subsection === "string" && article.subsection.trim() !== ""
      ? article.subsection
      : JSON.stringify(article.subsection || "business");

  return (
    <div className="flex items-end gap-[325px]">
      <Info subsection={subsection} />
      <Actions />
    </div>
  );
}
