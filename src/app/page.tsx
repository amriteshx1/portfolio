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

      <div className="h-[5vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

      <div className="h-[95vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full w-[80%] flex flex-col items-start justify-center text-stone-400">
            <p className="ml-5 tracking-tight text-[22px] text-white">Projects</p>
            <p className="ml-5 text-xs">End-to-end stuff I’ve built.</p>
            <div className="flex flex-col justify-start items-start ml-5 mt-10">
              <div className="flex items-center justify-start gap-5 max-h-[20vh] w-full">
                <img src="/wiora.png" alt="" className="max-h-[80%]" />
                <div className="flex flex-col justify-start gap-0">
                  <p className="text-[17px] tracking-tight text-stone-300">Wiora</p>
                  <div className="flex flex-wrap justify-start items-center gap-2 text-[9px] mt-2">
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Next.js</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">React</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TypeScript</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TailwindCSS</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">shadcn/ui</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Stream Video/Chat SDK</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">OpenAI Realtime</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">tRPC</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Inngest</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Neon (Postgres)</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Drizzle</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">BetterAuth</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Polar</p>
                  </div>
                  <p className="text-[11px] mt-2 text-stone-400">A next-gen video meeting platform where custom AI agents join live calls, actively contribute, generate transcripts and summaries, and provide post-call insights. Built real-time voice workflows using Stream and OpenAI, with dashboards, authentication, and billing.</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-5 max-h-[20vh] w-full mt-10">
                <img src="/whisp.png" alt="" className="max-h-[80%]" />
                <div className="flex flex-col justify-start gap-0">
                  <p className="text-[17px] tracking-tight text-stone-300">Whisp</p>
                  <div className="flex flex-wrap justify-start items-center gap-2 text-[9px] mt-2">
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">React</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TypeScript</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TailwindCSS</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Vite</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Socket.IO</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">WebRTC</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Node.js</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Express</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">MongoDB</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Google OAuth2</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Cloudinary</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Gemini</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Framer Motion</p>
                  </div>
                  <p className="text-[11px] mt-2 text-stone-400">A full-featured messaging platform with a built-in friend system, one-to-one chat, real-time audio/video calls, media sharing, typing indicators, read receipts, and much more. Built using Socket.IO and WebRTC at its core.</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-5 max-h-[20vh] w-full mt-10">
                <img src="/wordloom.png" alt="" className="max-h-[80%]" />
                <div className="flex flex-col justify-start gap-0">
                  <p className="text-[17px] tracking-tight text-stone-300">Wordloom</p>
                  <div className="flex flex-wrap justify-start items-center gap-2 text-[9px] mt-2">
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">React</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TailwindCSS</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Node.js</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Express</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Prisma</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">PostgreSQL</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">TinyMCE</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">JWT</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Google OAuth2</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Cloudinary</p>
                    <p className="bg-neutral-900 text-stone-400 px-1.5 py-[0.2] rounded-sm">Gemini</p>
                  </div>
                  <p className="text-[11px] mt-2 text-stone-400">A complete blogging platform with reader and admin interfaces, post/comment management, category filtering, and a rich text editor with AI-assisted tone optimization.</p>
                </div>
              </div>
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

      <div className="h-[65vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full w-[60%] flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full w-[20%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full w-[80%] flex flex-col items-start justify-center text-stone-400">
            <p className="ml-5 tracking-tight text-[22px] text-white">Experience</p>
            <p className="ml-5 text-xs">Work I’ve done outside personal projects.</p>
            <div className="flex flex-col justify-start items-start w-full mt-5">
              <div className="flex flex-col justify-start items-start">
                <p className="ml-5 text-sm flex justify-start items-center gap-2 text-stone-300"><MilestoneIcon className="size-4"/>OSS Contributions</p>
                <p className="ml-10 mt-2 text-[13px] flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="size-3" />antiwork/gumboard</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3" />feat: enhance invites UI/UX with calendar picker, cancel feedback, and number input</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: allow Board settings dialog to close when clicking outside</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: improve tablet responsiveness for card grid</p>
              
                <p className="ml-10 mt-3 text-[13px] flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="size-3" />antiwork/flexile</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: heading overflow issue by adjusting responsive font sizes</p>

                <p className="ml-10 mt-3 text-[13px] flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="size-3" />spectrum-ui</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: optimize animated card demo</p>
              
                <p className="ml-5 mt-5 text-sm flex justify-start items-center gap-2 text-stone-300"><MilestoneIcon className="size-4"/>Freelance Work</p>
                <p className="ml-10 mt-3 text-[13px] flex justify-start items-center gap-2 text-stone-400"><ActivityIcon className="size-3" />Clinic Website</p>
                <p className="ml-15 mt-2 text-[11px] flex justify-start items-center gap-0.5 text-stone-400/90"><DotIcon className="size-3 self-start" />Designed and developed a responsive single-page website for a Jaipur clinic, featuring service sections, doctor profile, treatment details, and integrated appointment booking.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

     

      
    </div>
  );
}
