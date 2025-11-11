"use client";

import GithubSection from "@/components/gitGrapth";
import { Binary, MoonIcon, UserSearchIcon, DownloadIcon, MilestoneIcon, DotIcon, GitMergeIcon, ActivityIcon, Twitter, MailIcon, LinkedinIcon, GithubIcon, ExternalLinkIcon, PlayIcon, FolderCodeIcon, SunIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto">
      <div className="lg:h-[7vh] md:h-[5vh] h-[6vh] w-full flex justify-center items-center border border-neutral-800 lg:mt-[1vh] mt-[0.5vh]">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-end md:gap-5 gap-2 border-x border-x-neutral-800 dotted-pattern">
          <Binary className="mr-auto md:ml-4 ml-2 md:size-9 size-8" />
          <p className="md:text-[15px] text-[11.5px] text-stone-400">Home</p>
          <p className="md:text-[15px] text-[11.5px] text-stone-400">Projects</p>
          <p className="md:text-[15px] text-[11.5px] text-stone-400 md:block hidden">Blogs</p>
          <p className="md:text-[15px] text-[11.5px] text-stone-400">Connect</p>
          <SunIcon className="md:mr-5 mr-3 size-4 text-stone-400"/>
        </div>
      </div>

      <div className="lg:h-[30vh] h-[15vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-center border-x border-x-neutral-800 neutral-pattern">
        </div>
      </div>

      <div className="lg:h-[25vh] md:h-[20vh] h-[25vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">
            {/* <img src="/me.png" alt="" className="max-h-full rounded-full bg-black border border-neutral-800" /> */}
          </div>

          <div className="h-full md:w-[80%] w-[90%] flex flex-col justify-center items-start text-stone-400">
            <p className="md:ml-5 ml-2 tracking-tight md:text-[15px] text-sm">Hey, I'm</p>
            <p className="md:text-3xl text-[24px] font-medium tracking-tight text-white md:ml-5 ml-2">Amritesh!</p>
            <p className="md:ml-5 ml-3 md:text-sm text-xs md:mt-3 mt-1">&lt; Full-Stack Engineer, Systems Thinker, In-Code Designer, and a Student of the Craft. /&gt;</p>
            <div className="w-full flex items-center justify-start md:gap-5 gap-2 md:mt-4 mt-4">
              <button className="flex items-center gap-1 tracking-tight md:text-xs text-[10px] bg-neutral-900 md:ml-5 ml-3 md:py-1 py-0.5 px-2 rounded-md text-stone-400"><UserSearchIcon className="md:size-3 size-[11px]" />Available for new opportunities</button>
              <button className="flex items-center gap-1 tracking-tight md:text-xs text-[10px] bg-neutral-900 md:py-1 py-0.5 px-2 rounded-md text-stone-400"><DownloadIcon className="md:size-3 size-[11px]" />Download resume</button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[5vh] h-[3vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

      <div className="lg:h-[23vh] md:h-[18vh] h-[25vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Skills</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">Tools & Technologies I work with.</p>
            <div className="md:ml-5 ml-3 flex flex-wrap items-center justify-start mt-5 gap-4">
              <img src="/nextjs.png" alt="" className="md:size-9 size-7" />
              <img src="/react.png" alt="" className="md:size-9 size-7" />
              <img src="/ts.png" alt="" className="md:size-9 size-7" />
              <img src="/tailwind.png" alt="" className="md:size-9 size-7" />
              <img src="/postgre.png" alt="" className="md:size-9 size-7" />
              <img src="/mongo.png" alt="" className="md:size-9 size-7" />
              <img src="/docker.png" alt="" className="md:size-9 size-7" />
              <img src="/webrtc.svg" alt="" className="md:size-8 size-[26px]" />
              <img src="/socket.svg" alt="" className="md:size-8 size-[26px]" />
              <img src="/framer.png" alt="" className="md:size-8 size-[26px]" />
              <img src="/shadcn.svg" alt="" className="md:size-8 size-[26px]" />
              <img src="/node.png" alt="" className="md:size-10 size-[30px]" />
              <img src="/express.png" alt="" className="md:size-9 size-7" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[35vh] md:h-[25vh] h-[32vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Github</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">My contributions and activity.</p>
            <GithubSection />
          </div>
        </div>
      </div>

      <div className="lg:h-[5vh] h-[3vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

      <div className="lg:h-[95vh] md:h-[55vh] h-[115vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Projects</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">End-to-end stuff I’ve built.</p>
            <div className="flex flex-col justify-start items-start md:ml-5 ml-3 md:mt-10 mt-14">
              <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 w-full">
                <img src="/wiora.png" alt="" className="lg:max-h-[16vh] max-h-[8vh]" />
                <div className="flex flex-col justify-start gap-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="md:text-[17px] text-[15px] tracking-tight text-stone-300">Wiora</p>
                    <div className="flex items-center justify-end md:mr-5 mr-3 gap-2">
                      <ExternalLinkIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <PlayIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <FolderCodeIcon className="md:size-3.5 size-[13px]"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 md:text-[9px] text-[8px] mt-2">
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
                  <p className="md:text-[11px] text-[10px] mt-2 text-stone-400">A next-gen video meeting platform where custom AI agents join live calls, actively contribute, generate transcripts and summaries, and provide post-call insights. Built real-time voice workflows using Stream and OpenAI, with dashboards, authentication, and billing.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 w-full md:mt-10 mt-12">
                <img src="/whisp.png" alt="" className="lg:max-h-[16vh] max-h-[8vh]" />
                <div className="flex flex-col justify-start gap-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="md:text-[17px] text-[15px] tracking-tight text-stone-300">Whisp</p>
                    <div className="flex items-center justify-end md:mr-5 mr-3 gap-2">
                      <ExternalLinkIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <PlayIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <FolderCodeIcon className="md:size-3.5 size-[13px]"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 md:text-[9px] text-[8px] mt-2">
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
                  <p className="md:text-[11px] text-[10px] mt-2 text-stone-400">A full-featured messaging platform with a built-in friend system, one-to-one chat, real-time audio/video calls, media sharing, typing indicators, read receipts, and much more. Built using Socket.IO and WebRTC at its core.</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 w-full md:mt-10 mt-12">
                <img src="/wordloom.png" alt="" className="lg:max-h-[16vh] max-h-[8vh]" />
                <div className="flex flex-col justify-start gap-0">
                  <div className="w-full flex items-center justify-between">
                    <p className="md:text-[17px] text-[15px] tracking-tight text-stone-300">Wordloom</p>
                    <div className="flex items-center justify-end md:mr-5 mr-3 gap-2">
                      <ExternalLinkIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <PlayIcon className="md:size-[18px] size-[17px] border-r border-r-neutral-800 pr-1" />
                      <FolderCodeIcon className="md:size-3.5 size-[13px]"/>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start items-center gap-2 md:text-[9px] text-[8px] mt-2">
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
                  <p className="md:text-[11px] text-[10px] mt-2 text-stone-400">A complete blogging platform with reader and admin interfaces, post/comment management, category filtering, and a rich text editor with AI-assisted tone optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[5vh] h-[3vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

      <div className="lg:h-[65vh] md:h-[45vh] h-[60vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Experience</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">Work I’ve done outside personal projects.</p>
            <div className="flex flex-col justify-start items-start w-full mt-5">
              <div className="flex flex-col justify-start items-start">
                <p className="md:ml-5 ml-3 md:text-sm text-[13px] flex justify-start items-center gap-2 text-stone-300"><MilestoneIcon className="md:size-4 size-3.5"/>OSS Contributions</p>
                <p className="md:ml-10 ml-6 mt-2 md:text-[13px] text-xs flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="md:size-3 size-[11px]" />antiwork/gumboard</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3" />feat: enhance invites UI/UX with calendar picker, cancel feedback, and number input</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: allow Board settings dialog to close when clicking outside</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: improve tablet responsiveness for card grid</p>
              
                <p className="md:ml-10 ml-6 mt-3 md:text-[13px] text-xs flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="md:size-3 size-[11px]" />antiwork/flexile</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: heading overflow issue by adjusting responsive font sizes</p>

                <p className="md:ml-10 ml-6 mt-3 md:text-[13px] text-xs flex justify-start items-center gap-2 text-stone-400"><GitMergeIcon className="md:size-3 size-[11px]" />spectrum-ui</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3" />fix: optimize animated card demo</p>
              
                <p className="md:ml-5 ml-3 mt-5 md:text-sm text-[13px] flex justify-start items-center gap-2 text-stone-300"><MilestoneIcon className="md:size-4 size-3.5"/>Freelance Work</p>
                <p className="md:ml-10 ml-6 mt-3 md:text-[13px] text-xs flex justify-start items-center gap-2 text-stone-400"><ActivityIcon className="md:size-3 size-[11px]" />Clinic Website</p>
                <p className="md:ml-15 ml-10 mt-2 md:text-[11px] text-[10px] flex justify-start md:items-center items-start gap-0.5 text-stone-400/90"><DotIcon className="size-3 self-start" />Designed and developed a responsive single-page website for a Jaipur clinic, featuring service sections, doctor profile, treatment details, and integrated appointment booking.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[25vh] md:h-[16vh] h-[25vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Education</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">Where I’m studying and what I’m pursuing.</p>
            <div className="flex w-full items-start justify-start">
              <div className="md:w-[70%] w-[80%] flex flex-col items-start justify-start">
                <p className="md:ml-5 ml-3 mt-5 md:text-[15px] text-[13px] text-stone-300">Bachelor of Technology - <span className="hidden md:inline">Computer Science & Engineering</span><span className="inline md:hidden text-[13px]"> CSE</span></p>
                <p className="md:ml-5 ml-3 mt-1 md:text-[13px] text-[11px] text-stone-400">IILM University, Greater Noida</p>
              </div>
              <div className="md:w-[30%] w-[20%] flex flex-col justify-start items-end">
                <p className="md:mr-5 mr-3 mt-5 md:text-sm text-[11px] text-stone-300">2023-27</p>
                <p className="md:mr-5 mr-3 mt-1 md:text-xs text-[10px] text-stone-400">CGPA: 9.02</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[5vh] h-[3vh] w-full flex justify-center items-center border-b border-b-neutral-800">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] border-r border-r-neutral-800">
            
          </div>
        </div>
      </div>

       <div className="lg:h-[25vh] md:h-[16vh] h-[20vh] w-full flex justify-center items-center border-b border-b-neutral-800 lg:mb-[1vh] mb-[0.5vh]">
        <div className="h-full lg:w-[60%] w-full flex items-center justify-start border-x border-x-neutral-800">
          <div className="h-full md:w-[20%] w-[10%] flex items-center justify-center border-r border-r-neutral-800 dotted-pattern">

          </div>
          <div className="h-full md:w-[80%] w-[90%] flex flex-col items-start justify-center text-stone-400">
            <p className="md:ml-5 ml-3 tracking-tight md:text-[22px] text-xl text-white">Connect</p>
            <p className="md:ml-5 ml-3 md:text-xs text-[11px]">Let’s get in touch.</p>
            <div className="flex justify-start items-center w-full mt-5">
              <p className="md:ml-5 ml-3 md:text-[13px] text-[11px] flex items-center justify-center md:gap-1.5 gap-1 text-stone-300 md:py-1.5 py-1 md:px-3 px-2 bg-neutral-900 rounded-sm"><Twitter className="md:size-3.5 size-3 p-0" />Twitter</p>
              <p className="md:ml-5 ml-3 md:text-[13px] text-[11px] flex items-center justify-center md:gap-1.5 gap-1 text-stone-300 md:py-1.5 py-1 md:px-3 px-2 bg-neutral-900 rounded-sm"><MailIcon className="md:size-3.5 size-3 p-0" />Mail</p>
              <p className="md:ml-5 ml-3 md:text-[13px] text-[11px] flex items-center justify-center md:gap-1.5 gap-1 text-stone-300 md:py-1.5 py-1 md:px-3 px-2 bg-neutral-900 rounded-sm"><LinkedinIcon className="md:size-3.5 size-3 p-0" />LinkedIn</p>
              <p className="md:ml-5 ml-3 md:text-[13px] text-[11px] flex items-center justify-center md:gap-1.5 gap-1 text-stone-300 md:py-1.5 py-1 md:px-3 px-2 bg-neutral-900 rounded-sm"><GithubIcon className="md:size-3.5 size-3 p-0" />Github</p>

            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
