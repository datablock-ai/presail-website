export default function Hamza() {
  return (
    <div className="fixed bottom-5 right-5">
      <span className="inline-block relative">
        <a href="https://t.me/pacyos" target="_blank">
        <span className="absolute -top-10 w-25 bg-main rounded text-white -left-20 text-center px-3 py-2 font-bold">Questions?</span>
        <img
          className="h-20 w-20 rounded-full shadow-xl"
          src="/team/even.webp"
          width="80"
          height="80"
          alt="Talk to Hamza"
        />
        <span className="absolute top-0 right-0 block h-5 w-5 rounded-full ring-2 ring-white bg-green-400" />
        </a>
      </span>
    </div>
  )
}