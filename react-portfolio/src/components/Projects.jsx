import React from 'react'
import ProjectCard from './ProjectCard'


const projectOne = {
    name: "Blog-Project",
    img : "public/Screenshot 2025-10-01 190710.png",
    description: "Built my first full-stack Blog Website using Django REST Framework and ReactJS, connected through APIs. Features include user authentication and blogs creation/deletion. This project pushed me beyond static designs into real full-stack development with frontend–backend integration, and it’s now live on my portfolio.",
    technologies: ['Django REST', 'ReactJS', 'Render'],
    liveDemo: "https://blogsforyou.onrender.com/",
    github: "https://github.com/your-username/blog-project"
}

const projectTwo = {
    name: "Full-Stack Instagram Clone",
    img : "public/Screenshot 2025-07-30 100144.png",
    description: "Built my first full-stack Instagram clone using Django and HTML/CSS/JavaScript. Features include user auth, post creation/deletion, likes, and comments. This project elevated my skills from static pages to dynamic full-stack development and is now live on my portfolio.",
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
    liveDemo: "https://instaaclone.pythonanywhere.com/",
    github: "https://github.com/Adittyaaa-codes/Django-Project"
}

const projectThree = {
    name: "To-do-List App",
    description: "A simple, elegant task manager that lets users add, complete, and delete tasks. Built with HTML, CSS, and JavaScript, it features real-time task counters, checkbox-based completion, and a responsive dark-themed UI for a smooth user experience.",
    img: "public/Screenshot 2025-07-03 223750.png",
    technologies: ['HTML','CSS','JAVASCRIPT'],
    liveDemo: "https://to-do-list-gamma-seven-88.vercel.app/",
    github: "https://github.com/Adittyaaa-codes/To-Do-List"
}


const projectFour = {
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and journey as a developer.It serves as a central hub to explore my work in Full-Stack Development reflecting my passion for building impactful digital experiences.",
    img: "public/Screenshot 2025-10-29 053540.png",
    technologies: ['React', 'Tailwind CSS'],
    liveDemo: "https://adityamallick.com",
    github: "https://github.com/Adittyaaa-codes/Self-Portfolio-React"
}

// Export project data for use in other components
export { projectOne, projectTwo, projectThree };

const Projects = () => {
  return (
    <>
        <div className='flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 mt-4'>
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-3xl font-bold text-white mb-8 text-center'>My Projects</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>       
                        <ProjectCard project={projectOne} />
                        <ProjectCard project={projectTwo} />             
                        <ProjectCard project={projectThree} />             
                        <ProjectCard project={projectFour} />  
                        

                                  
                    </div>
                    <div className='projectlastcard flex w-5xl rounded-3xl mt-8 mb-8  items-center justify-center' style={{height:"8em", fontSize:"1.5em", color:"gray"}}>
                            More Projects will be added soon...😁
                        </div> 
                </div>
        </div>
    </>
  )
}

export default Projects