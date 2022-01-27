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
            href="#"
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
              href="#"
          />
        </div>
    </div>
    </Container>
  )
}
