//components/Top.jsx
import InfoTop from "./InfoTop";
import Text from "./Text";

export default function Top({ article }) {
    return (
        <div className="flex flex-col w-[693px] gap-12 p-0 mr-16">
            <InfoTop byline={article.byline} section={article.section} published_date={article.published_date} />
            <Text title={article.title} abstract={article.abstract} />
        </div>
    );
}
/* 
{
        "section": "business",
        "subsection": "",
        "title": "What to know about the inflation report.",
        "abstract": "A fresh Consumer Price Index report could show that inflation, much cooler than in 2022 and 2023, is not fully stamped out.",
        "url": "https://www.nytimes.com/live/2024/11/13/business/cpi-inflation-fed/inflation-cpi-october",
        "uri": "nyt://article/40949bde-d376-5584-bd0c-988b08a84c84",
        "byline": "By Jeanna Smialek",
        "item_type": "Article",
        "updated_date": "2024-11-13T08:37:28-05:00",
        "created_date": "2024-11-13T05:03:46-05:00",
        "published_date": "2024-11-13T05:03:46-05:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
            "Prices (Fares, Fees and Rates)",
            "Regulation and Deregulation of Industry",
            "Inflation (Economics)",
            "Presidential Election of 2024",
            "Consumer Price Index",
            "Interest Rates",
            "United States Economy"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": null,
        "short_url": ""
    },

    */
