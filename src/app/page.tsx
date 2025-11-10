"use client";

import GithubSection from "@/components/gitGrapth";
import { Binary, MoonIcon, UserSearchIcon, DownloadIcon, MilestoneIcon, DotIcon, GitMergeIcon, ActivityIcon, Twitter, MailIcon, LinkedinIcon, GithubIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto">
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

      <div className="h-[25vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">
            {/* <img src="/me.png" alt="" className="max-h-full rounded-full bg-black border border-neutral-800" /> */}
          </div>

          <div className="h-full w-[80%] flex flex-col justify-center items-start text-stone-400">
            <p className="ml-5 tracking-tight text-[15px]">Hey, I'm</p>
            <p className="text-3xl font-medium tracking-tight text-white ml-5">Amritesh!</p>
            <p className="ml-5 text-sm mt-3">&lt; Full-Stack Engineer, Systems Thinker, In-Code Designer, and a Student of the Craft. /&gt;</p>
            <div className="w-full flex items-center justify-start gap-5 mt-4">
              <button className="flex items-center gap-1 tracking-tight text-xs bg-neutral-900 ml-5 py-1 px-2 rounded-md text-stone-400"><UserSearchIcon className="size-3" />Available for new opportunities</button>
              <button className="flex items-center gap-1 tracking-tight text-xs bg-neutral-900 py-1 px-2 rounded-md text-stone-400"><DownloadIcon className="size-3" />Download resume</button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[5vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

      <div className="h-[23vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full w-[80%] flex flex-col items-start justify-center text-stone-400">
            <p className="ml-5 tracking-tight text-[22px] text-white">Skills</p>
            <p className="ml-5 text-xs">Tools & Technologies I work with.</p>
            <div className="ml-5 flex flex-wrap items-center justify-start mt-5 gap-4">
              <img src="/nextjs.png" alt="" className="size-9" />
              <img src="/react.png" alt="" className="size-9" />
              <img src="/ts.png" alt="" className="size-9" />
              <img src="/tailwind.png" alt="" className="size-9" />
              <img src="/postgre.png" alt="" className="size-9" />
              <img src="/mongo.png" alt="" className="size-9" />
              <img src="/docker.png" alt="" className="size-9" />
              <img src="/webrtc.svg" alt="" className="size-8" />
              <img src="/socket.svg" alt="" className="size-8" />
              <img src="/framer.png" alt="" className="size-8" />
              <img src="/shadcn.svg" alt="" className="size-8" />
              <img src="/node.png" alt="" className="size-10" />
              <img src="/express.png" alt="" className="size-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[35vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full w-[80%] flex flex-col items-start justify-center text-stone-400">
            <p className="ml-5 tracking-tight text-[22px] text-white">Github</p>
            <p className="ml-5 text-xs">My contributions and activity.</p>
            <GithubSection />
          </div>
        </div>
      </div>

      
      
    </div>
  );
}
