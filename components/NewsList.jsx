//components/NewsList.jsx
import { v4 as uuidv4 } from 'uuid';
import News from "./News";
import { fetchNews } from '@/utils/fetchNews';


export default async function NewsList() {
  const articles = await fetchNews();

  return (
    <div>
      {articles.map((article) => (
        <News key={uuidv4()} article={article} />
      ))}
    </div>
  );
}
