
import { Binary, MoonIcon, UserSearchIcon, DownloadIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto">
      <div className="h-[7vh] w-full flex justify-center items-center border border-neutral-800 mt-[1vh]">
        <div className="h-full w-[60%] flex items-center justify-end gap-5 border-x border-x-neutral-800 dotted-pattern">
          <Binary className="mr-auto ml-4 size-9" />
          <p className="text-[15px] text-stone-400">Home</p>
          <p className="text-[15px] text-stone-400">Projects</p>
          <p className="text-[15px] text-stone-400">Blogs</p>
          <p className="text-[15px] text-stone-400">Connect</p>
          <MoonIcon className="mr-5 size-4 text-stone-400"/>
        </div>
      </div>

      <div className="h-[30vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-center border-x border-x-neutral-800 neutral-pattern">
        </div>
      </div>

      <div className="h-[20vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">
            {/* <img src="/me.png" alt="" className="max-h-full rounded-full bg-black border border-neutral-800" /> */}
          </div>

          <div className="h-full w-[80%] flex flex-col justify-center items-start text-stone-400">
            <p className="ml-5 tracking-tight text-[15px]">Hey, I'm</p>
            <p className="text-3xl font-medium tracking-tight text-white ml-5">Amritesh!</p>
            <p className="ml-5 text-sm mt-3">&lt; Full-Stack Engineer, Systems Thinker, In-Code Designer, and a Student of the Craft. /&gt;</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
