import Paper from '../components/layouts/Paper';
import About from '../sections/about';
import Education from '../sections/education';
import Header from '../sections/header';
import Projects from '../sections/projects';
import Skills from '../sections/skills';
import WorkExperiences from '../sections/workExperiences';

export default function HomeLayout() {
  return (
    <div className="flex flex-col">
      <Paper pageNumber={1}>
        <div className="flex flex-col gap-24px">
          <Header />
          <About />
          <WorkExperiences />
          <Projects />
          <Skills />
          <Education />
        </div>
      </Paper>
    </div>
  );
}
