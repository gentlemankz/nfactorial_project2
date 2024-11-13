//components/InfoTop.jsx
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function InfoTop({byline,section,published_date}) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="mt-0 w-6 h-6">
        <AvatarImage src="/authorimage.webp" alt="Author Image" />
      </Avatar>
      <p
        className="font-medium text-sm"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        {byline}
      </p>
      <p
        className="font-medium text-sm opacity-50"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        in
      </p>
      <p
        className="font-medium text-sm"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        {section}
      </p>
      <p
        className="font-medium text-sm"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        .
      </p>
      <p
        className="font-medium text-sm opacity-50"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        {published_date}
      </p>
    </div>
  );
}
