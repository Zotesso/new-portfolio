import styles from '../styles/Home.module.scss';

function Home() {
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
      <section>
        Teste
      </section>
    </div>
  );
}

export default Home