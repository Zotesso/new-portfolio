import { useEffect } from 'react';
import Aos from 'aos';

import ProjectItem from '../components/Project/project-item';
import styles from '../styles/Home.module.scss';
import 'aos/dist/aos.css';
import TabFilter from '../components/TabFilter/tab-filter';

const Home = () => {
  const projectSections = [...Array(3)];

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  })

  return (
    <div>
      <main className="w-full h-screen p-2">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <section className="flex flex-col-reverse md:flex-row items-center md:h-full w-full">
          <div className="md:w-1/2">
            <img src="/images/undraw-background.svg" alt="" />
          </div>
          <div className="md:w-1/2 ml-12 md:mb-44">
            <h1 className="md:text-5xl text-2xl md:mb-4 font-semibold text-dark font-display">
              Welcome stranger,
            </h1>
            <h1 className="md:text-5xl text-2xl font-semibold mb-8 text-dark font-display">
              I'm <strong className="text-blue">Pedro Zotesso</strong>
            </h1>
            <div className="w-full flex items-center justify-center">
              <a className="btn-custom text-xl font-display md:text-3xl font-semibold mr-48 cursor-pointer">
                See Projects
              </a>
            </div>
          </div>
        </section>

        <div className={styles.animationArea}>
          <ul className={styles.boxArea}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </main>
      <section className="overflow-hidden">
        <h1 className="md:text-5xl text-2xl md:mb-4 font-semibold text-center mt-8 underline text-dark font-display">
          Projects
        </h1>
        <TabFilter tabs={['Web', 'Mobile', 'Desktop']}></TabFilter>
        {
          projectSections.map((el, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" key={index}>
              <ProjectItem
              key={index}
              reversed={index % 2 !== 0}
              projectTitle="Estrella"
              projectDescription="Survival Horror developed with Unreal 4"
              imageSrc="/images/computer-mockup.png"
              projectTechnologies="C++" />
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Home