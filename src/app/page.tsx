
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

      
    </div>
  );
}
