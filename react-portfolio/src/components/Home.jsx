import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projectOne, projectTwo} from './Projects';


const web_technologies = [
    'HTML','CSS', 'JavaScript',
    'React','Tailwind','Django REST',
    'APIs','Deployment'
    ]

const other_technologies = [
    'Core Java','DSA(C++)','GitHub','Communication'
]

const ai_technologies = [
    'Python', 'Agents', 'RAG', 'VectorDB', 'LangChain', 'n8n', 'Prompt Engineering'
]

const sorry_msg = () => {
    alert("The CV will be added later! Sorry for the inconvenience.")
}
const Home = () => {
    return (
        <>

            {/* Hero Section */}
            <div className='flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 mt-4'>
                <div className='max-w-5xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>

                        {/* Left Content */}
                        <div className='text-center lg:text-left space-y-6 order-2 lg:order-1'>
                            <div className='space-y-4'>

                                <p className='text-lg sm:text-xl text-purple-400 font-medium ' style={{
                                    marginBottom: 0
                                }}>
                                    Hello, I'm
                                </p>
                                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight'>
                                    Aditya Mallick
                                </h1>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-gray-300 font-semibold'>
                                        Full-Stack Developer
                                    </h2>
                                    <p className='text-lg sm:text-xl text-purple-300'>
                                        CSE Undergrad
                                    </p>
                                </div>
                            </div>

                            <p className='text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed'>
                                Passionate about developing full stack websites and implementing AI.
                                There is always more to learn and I am eager to explore new techs.
                            </p>

                            {/* CTA Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'>
                                <button className='border-2 border-purple-500 text-purple-400 hover:text-white  hover:bg-purple-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105' 

                                onClick={sorry_msg}>
                                    Download CV
                                </button>
                                <button>
                                    <a href="https://github.com/Adittyaaa-codes" target='_blank' >
                                        GitHub
                                    </a>
                                </button>

                                <button>
                                    <a href="https://www.linkedin.com/in/aditya-mallick-1512/" target='_blank' >
                                        LinkedIn
                                    </a>
                                </button>


                            </div>

                        </div>


                        <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
                            <div className='relative'>

                                <div className='w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative'>

                                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-purple-800/20 animate-spin-slow'></div>
                                    <div className='absolute inset-4 rounded-full bg-gradient-to-l from-purple-500/30 to-transparent animate-pulse'></div>


                                    <div className='absolute inset-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-purple-500/50 flex items-center justify-center overflow-hidden'>
                                        <div className='text-6xl sm:text-7xl text-purple-400'>
                                            <img src="https://res.cloudinary.com/dsoum78xj/image/upload/v1762055367/Gemini_Generated_Image_yz1urtyz1urtyz1u_yp0myk.png" alt="profile" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Projects Section */}
            <div className='py-20 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-5xl mx-auto'>
                    {/* Section Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl sm:text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight mb-4 '>
                            Featured Projects
                        </h2>
                        <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                            Here are some of my recent projects that showcase my skills in full-stack development and AI implementation.
                        </p>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        <ProjectCard project={projectOne} />
                        <ProjectCard project={projectTwo} />
                    </div>

                    <div className='text-center mt-12'>
                        <Link to="/projects">
                            <button className='border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                                View All Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <div className='max-w-5xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl sm:text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight mb-4'>
                            Relevant Skills
                        </h2>
                    </div>
                    <div className='flex flex-wrap items-center-safe justify-center' >
                        <div className='flex flex-wrap items-center-safe justify-center-safe  w-5xl rounded-2xl mb-4' style={{ height: '500px' }}>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                                <div className='p-5 m-4 rounded-2xl text-center' style={{ height: '420px', backgroundColor: '#131521'}}>
                                    <h1 className='text-2xl font-semibold mb-2'>Web Development</h1>
                                    <hr className='mb-4' />
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                        {web_technologies.map((tech, index) => (
                                            <span key={index} className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-10 mb-2'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                </div>
                                <div className='p-5  m-4 rounded-2xl text-center' style={{ height: '420px' , backgroundColor: '#131521'}}>
                                    <h1 className='text-2xl font-semibold mb-2'>AI</h1>
                                    <hr className='mb-4' />
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                        {ai_technologies.map((tech, index) => (
                                            <span key={index} className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-10 mb-2'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                </div>
                                <div className='p-5  m-4 rounded-2xl text-center' style={{ height: '420px', backgroundColor: '#131521' }}>
                                    <h3 className='text-2xl font-semibold mt-3 '>DataBases</h3>
                                    <hr className='mt-1 bg-gray-700 mx-auto mb-4' />
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-10 mb-2'>
                                                MongoDB
                                            </span>
                                    <span className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-10 mb-2'>
                                                MySQL
                                            </span>
                                    </div>
                                    <h1 className='text-xl font-semibold mb-2 mt-20'>Others</h1>
                                    <hr className='mb-4' />
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                        {other_technologies.map((tech, index) => (
                                            <span key={index} className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-10 mb-2'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home