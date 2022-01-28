import Image from 'next/image';
import Container from '../components/Container';

import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hi Woolcott
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Front-end Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              I design and build things for the web. Creating responsive websites and Web3 dApps.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image 
            alt="Tyler Woolcott"
            height={176}
            width={176}
            src="/avatar.jpg"
            className="rounded-full filter grayscale"
          />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
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
            subtitle="This project was completed as a code challenge in the interview process for a job. It's built with React, it connects to the Hatchways API to search and tag students and the styling is done with TailwindCSS."
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
