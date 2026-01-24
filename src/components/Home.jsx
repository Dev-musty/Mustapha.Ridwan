import React from 'react';
import Hero from './Hero';
import ProcessMap from './ProcessMap';
import Journey from './Journey';
import Experience from './Experience';
import ProjectsPage from './Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <Journey />
            <Experience />
            <ProjectsPage /> 
            <ProcessMap />
           
            <section id="contact" className="py-20 px-6">
                <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-blueprint-text font-display font-bold text-3xl md:text-4xl mb-6">GET_IN_TOUCH</h2>
                <p className="text-blueprint-muted mb-8">
                    Open for collaboration. Available for hire.
                </p>
                <a 
                    href="mailto:mustapharid19@gmail.com" 
                    className="inline-block bg-blueprint-text text-blueprint-bg font-mono px-8 py-4 hover:opacity-90 transition-opacity"
                >
                    Email
                </a>
                </div>
            </section>
        </>
    )
}

export default Home;
