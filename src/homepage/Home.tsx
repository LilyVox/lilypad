import Projects from '../projects';

export default function Home() {
  const card = 'm-4 p-4 backdrop-blur bg-primary/60 rounded-md max-w-2xl text-primary-text';
  return (
    <section id="about" className="card">
      <p className={`${card}`}>A full-stack developer with a focus on front-end engineering and modern web technologies. Proficient in TypeScript, React, Node.js, Express, PostgreSQL, Tailwindcss, and the MERN stack with additional experience in PHP and PowerShell automation.</p>
      <p className={`${card} indent-20`}>I build applications that are clean, scalable, and user-focused. My background across both front-end and back-end development enables me to deliver solutions that balance performance with usability.</p>
      <p className={`${card} indent-20`}>Seeking opportunities as a Front-End Developer or Software Engineer where I can contribute technical expertise, attention to detail, critical thinking and a drive to grow with a collaborative team.</p>
      <Projects />
    </section>
  );
}
