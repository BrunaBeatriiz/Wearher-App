import { Moon, Sun } from "lucide-react";



const Header = ({dark, darkMode}) => {
  return (
    <header className={`
    w-full flex items-center justify-between px-6 py-3 mb-8 backdrop-blur-md border-b border-white/20 ${dark ? "bg-blue-900/80" : "bg-sky-900/80"}`}>

      <h1 className="text-2xl font-semibold tracking-wide text-white">Weather Today</h1>

    <button className="text-sm p-2 rounded-full border border-white/70 shadow-sm transition-all duration-300 hover:scale-110 active:scale-90"
    onClick={() => darkMode()}>
     {dark ? <Sun size={18} className="text-white"/> : <Moon size={18} className="text-white"/>}
</button>
    </header>
  )
}

export default Header;