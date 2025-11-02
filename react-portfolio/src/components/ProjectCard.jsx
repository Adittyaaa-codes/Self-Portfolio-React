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
            <div className='w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                <div className='h-40 sm:h-48 bg-linear-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center overflow-hidden'>
                    <img src={img} alt={name} className='w-full h-full object-cover' />
                </div>
                <div className='p-4 sm:p-6'>
                    <h3 className='text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2'>{name}</h3>
                    <p className='text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed'>{description}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {technologies.map((tech, index) => (
                            <span key={index} className='px-2 py-1 sm:px-3 bg-purple-600/20 text-purple-300 rounded-full text-xs'>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
                        {liveDemo && liveDemo !== "#" && (
                            <a href={liveDemo} target="_blank" rel="noopener noreferrer" 
                               className='border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 px-3 py-2 sm:px-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 text-center no-underline'>
                                Live Demo
                            </a>
                        )}
                        {github && github !== "#" && (
                            <a href={github} target="_blank" rel="noopener noreferrer" 
                               className='border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-500 px-3 py-2 sm:px-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 text-center no-underline'>
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard