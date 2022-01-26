import Container from '../components/Container';

export default function About() {
    return (
        <Container title="About - Tyler Woolcott">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    About Me
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Hi, I'm Tyler. I'm a developer, writer and educator.
                    </p>
                    &nbsp; 
                    <p>
                        I'm a self-motivated learner with strong organisation, time management & communication skills. I'm able to work independently & collaboratively in a team with a meticulous attention to detail.
                    </p>
                    &nbsp; 
                    <p>
                    I ran a contemporary art gallery for 7 years when I learned to code and started building projects using JavaScript, TypeScript, React, NextJS, TailwindCSS. I then jumped down the rabbit hole of decentralized Web3 while expanding my tech stack to Solidity, Hardhat, Ethers, Web3.js. 
                    </p>
                </div>
            </div>

        </Container>
    )
}