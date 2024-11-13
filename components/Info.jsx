//components/Info.jsx
export default function Info({subsection}) {
  return (
    <div className="flex gap-2 items-center">
      <button
        className="text-sm font-medium rounded-100 bg-[#081E341F] pt-1.5 pr-4 pb-1.5 pl-4"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        {subsection}
      </button>
      <p
        className="text-sm font-medium opacity-50"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        12 min read
      </p>
      <p
        className="text-sm font-medium"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        .
      </p>
      <p
        className="text-sm font-medium opacity-50"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        Selected for you
      </p>
    </div>
  );
}
