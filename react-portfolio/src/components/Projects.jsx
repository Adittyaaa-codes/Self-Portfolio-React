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
    github: "https://github.com/your-username/ecommerce-app"
}

const projectThree = {
    name: "Portfolio Website",
    description: "Personal portfolio showcasing my projects and skills",
    img: "public/Screenshot 2025-10-29 053540.png",
    technologies: ['React', 'Tailwind CSS'],
    liveDemo: "https://your-portfolio-demo.com",
    github: "https://github.com/your-username/portfolio-website"
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
                        <ProjectCard project={projectTwo} />  
                        

                                  
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