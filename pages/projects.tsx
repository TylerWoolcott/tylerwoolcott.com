import Image from 'next/image';
import Container from '../components/Container';

import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <Container
    title="Projects - Tyler Woolcott"
    description="My featured projects, built with tech stacks including JavaScript, Typescript, React, Next.js, TailwindCSS, Solidity, Hardhat, Ethers, Web3Modal."
    >
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Featured Projects
        </h1>
            <div className="mb-14">
                <p className="text-gray-600 dark:text-gray-400">
                    This is a selection of my featured projects, built with tech stacks including JavaScript, TypeScript, React, Next.js, TailwindCSS, Solidity, Hardhat, Ethers, and Web3Modal.
                </p>
            </div>
        <div className="flex gap-10 flex-col">
        <ProjectCard 
            img={
            <Image 
              src="/static/images/projects/tylerwoolcott-website.jpg" 
              alt="Personal Website"
              layout="responsive"
              height={130}
              width={200}
              className="rounded-xl"
              >
              </Image>
              }
            title="Personal Website"
            subtitle="This is my personal website, which contains a portfolio, dashboard and resume. I built it with many fresh React and Next.js features such as API routes powering connection to my Spotify playlists and TailwindCSS."
            gradient="from-[#3A1C71] via-[#D76D77] to-[#FFAF7B]"
            target="_blank"
            rel="noreferrer"
            href="https://tylerwoolcott.com/"
          />
           <ProjectCard 
              img={
              <Image 
                src="/static/images/projects/moot.jpg" 
                alt="Moot app"
                layout="responsive"
                height={130}
                width={200}
                className="rounded-xl"
                >
                </Image>
                }
              title="Moot app"
              subtitle="I built this website for the CEO of Moot. It uses Next.js, React and TailwindCSS, as well as a typewriter effect written in JavaScript. The video component is deployed using Cloudinary."
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              target="_blank"
              rel="noreferrer"
              href="https://www.trymoot.com/"
          />
          <ProjectCard 
            img={
            <Image 
              src="/static/images/projects/studiovisit.jpg" 
              alt="StudioVisit dApp"
              layout="responsive"
              height={130}
              width={200}
              className="rounded-xl"
              >
              </Image>
              }
            title="StudioVisit dApp"
            subtitle="I built this dApp after completing the Consensys Blockchain Developer Bootcamp. It uses React and styled components for the frontend and Hardhat, Ethers and Web3Modal for the backend."
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            target="_blank"
            rel="noreferrer"
            href="https://studiovisit-io-e3by6varq-tylerwoolcott.vercel.app/"
          />
          <ProjectCard 
          img={
            <Image 
              src="/static/images/projects/student-search.jpg" 
              alt="Student Search"
              layout="responsive"
              height={150}
              width={200}
              className="rounded-xl"
              >
              </Image>
              }
            title="Student Search"
            subtitle="This project was completed as a code challenge in the interview process for a job. It's built with React, it connects to the Hatchways API to search and tag students and the styling is done with Tailwind CSS."
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            target="_blank"
            rel="noreferrer"
            href="https://hatchways-frontend-fo969rni1-tylerwoolcott.vercel.app/"
          />
          <ProjectCard 
           img={
            <Image 
              src="/static/images/projects/netflix.jpg" 
              alt="Netflix App"
              layout="responsive"
              height={150}
              width={200}
              className="rounded-xl"
              >
              </Image>
              }
              title="Netflix App"
              subtitle="I built this Netflix clone from scratch as part of the Advanced React module from the Front-end Developer Career Path on Scrimba. It's built with React using styled components, Fuse.js for search and implements Firebase for authentication."
              gradient="from-[#D8B4FE] to-[#818CF8]"
              target="_blank"
              rel="noreferrer"
              href="https://netflix-app-eight.vercel.app/"
          />
        </div>
    </div>
    </Container>
  )
}
