//components/Left.jsx
import InfoBottom from "./InfoBottom";
import Top from "./Top";

export default function Left({article}) {
    return(
        <div className="flex flex-col gap-70">
            <Top article={article} />
            <InfoBottom article={article} />
        </div>
    );
}