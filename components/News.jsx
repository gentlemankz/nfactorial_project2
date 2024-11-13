//components/News.jsx
import Left from "./Left";

export default function News({article}) {

  const imageUrl = article.multimedia && article.multimedia.length > 0
  ? article.multimedia[2]?.url
  : '/postimage.webp';

  return (
      <div className="flex items-start gap-[100px] pb-9">
        <Left article={article} />
        <div 
        className="bg-cover bg-center bg-no-repeat w-64 h-64 mt-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
        loading="lazy"
        >

        </div>
      </div>
  );
}
