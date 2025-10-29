import React from 'react'
import Home from './Home';


const ProjectCard = ({ project = {} }) => {
    
    const {
        name = "Project Name",
        description = "Project description goes here",
        img = "https://via.placeholder.com/150",
        technologies = ["React", "Node.js", "MongoDB"],
        liveDemo = "#",
        github = "#"
    } = project;

    return (
        <>
            <div className='bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                <div className='h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center'>
                    <div className='text-6xl'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='p-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>{name}</h3>
                    <p className='text-gray-400 text-sm mb-4'>{description}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {technologies.map((tech, index) => (
                            <span key={index} className='px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs'>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex gap-3'>
                        {liveDemo && liveDemo !== "#" && (
                            <button className='border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105'>
                                <a href={liveDemo} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:text-purple-300 text-sm font-medium'>
                                    Live Demo
                                </a>
                            </button>
                        )}
                        {github && github !== "#" && (
                            <button className='border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105'>
                                <a href={github} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:text-purple-300 text-sm font-medium'>
                                    View Code
                                </a>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard