import { useTranslations } from "next-intl";
import AboutMe from "../components/desktop/AboutMe";
import Footer from "../components/desktop/Footer";
import Heading from "../components/desktop/Heading";
import MySkills from "../components/desktop/MySkills";
import Projects from "../components/desktop/Projects";
import Session from "../components/desktop/Session";
import WorkExperience from "../components/desktop/WorkExperience";

function Home() {
  const t = useTranslations("Index");
  return (
    <main className="w-full bg-neutral-900 flex flex-col items-center scroll-smooth">
      <Heading/>
      <Session/>
      <AboutMe/>
      <MySkills/>
      <WorkExperience/>
      <Projects/>
      <Footer/>
    </main>
  );
}
export default Home;