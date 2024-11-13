//components/Text.jsx
export default function Text({ title, abstract }) {

  return (
    <div className="flex flex-col gap-6">
      <h2
        className="m-0 font-bold text-3xl"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
        {title}
      </h2>
      <p
        className="m-0 font-normal text-base"
        style={{ fontFamily: " 'Inter', sans-serif " }}
      >
      {abstract}
      </p>
    </div>
  );
}
