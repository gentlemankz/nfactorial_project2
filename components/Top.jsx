//componets/Top.jsx
import InfoTop from "./InfoTop";
import Text from "./Text";

export default function Top({ article }) {
    const title = typeof article.title === "string" ? article.title : JSON.stringify(article.title);

    return (
        <div className="flex flex-col w-[693px] gap-12 p-0 mr-16">
            <InfoTop byline={article.byline} section={article.section} published_date={article.published_date} />
            <Text title={title} abstract={article.abstract} />
        </div>
    );
}
