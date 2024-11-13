export default function Footer() {
  return (
    <div className="flex justify-end pt-[778px] pr-40 pb-8 pl-40">
      <div className="flex flex-col justify-start items-end gap-8">
        <p
          className="font-medium text-sm opacity-50 pt-2.5 pr-3 pb-2.5 pl-3"
          style={{ fontFamily: " 'Inter', sans-serif " }}
        >
          Credits: photos from <span />
          <a className="underline" href="https://unsplash.com" target="_blank">
            Unsplash.com
          </a>
          , icons from <span />
          <a className="underline" href="https://icons8.com/" target="_blank">
            Icons8
          </a>
          , graphics from craftwork.design.
        </p>
        <p
          className="font-medium text-sm pt-2.5 pr-3 pb-2.5 pl-3"
          style={{ fontFamily: " 'Inter', sans-serif " }}
        >
          Made with ✨❤️ at nFactorial in 2022.
        </p>
      </div>
    </div>
  );
}
