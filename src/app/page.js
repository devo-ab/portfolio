import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-0">
    <Banner></Banner>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
  </main>;
}
