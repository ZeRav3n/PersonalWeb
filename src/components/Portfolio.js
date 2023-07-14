import React from 'react';
import "../App.css"

function Portfolio() {
  const projects = [
    {
      title: 'SportsOnTheGo',
      description: 'A mobile application using react-native to display real-time information on basketball matches and let users buy tickets to upcoming tournaments.',
      image: 'https://assets.aws.shawdirect.ca/uploadedimages/promotions/english/shawgo/sportsnet_new/hero.jpg',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/SportsOnTheGo'
    },
    {
      title: 'Network-Management',
      description: 'A network monitoring tool using Python where users can ping sites, check on their DNS, find the traceroute, and monitor the I/O of the network.',
      image: 'https://w7.pngwing.com/pngs/650/930/png-transparent-computer-network-management-network-monitoring-technical-support-network-service-research-service-people-computer.png',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/Network-Management'
    },
    {
      title: 'Bookly',
      description: 'An e-commerce-based web application for a bookstore where users can add, update or remove their books',
      image: 'https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/CPAN-214_Python-Project'
    },
  ]
  return (
    <div id="portfolio" className='portfolio'>
      <h1 data-aos="fade-up">My work</h1>
      <p data-aos="fade-up">Take a gander at some of my work!</p>    

      <div className="project-grid">
  {projects.map((project, index) => (
    <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
      <div className="project-card">
        <div 
          className="project-background" 
          style={{backgroundImage: `url(${project.image})`}}
        />
        <div className="project-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-links">
          <a href={project.projectUrl} target="_blank" rel="noreferrer">Live Project</a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  ))}

      </div>
    </div>
  );
}

export default Portfolio;
