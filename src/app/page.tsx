import AboutMeComponent from "@/components/aboutMe/AboutMeComponent";
import ContactUsComponent from "@/components/contactUs/ContactUsComponent";
import HeroSectionComponent from "@/components/heroSection/HeroSectionComponent";
import MySkillsComponent from "@/components/mySkills/MySkillsComponent";
import ProjectCardsComponent from "@/components/projectCards/ProjectCardsComponent";
import QualificationExperiences from "@/components/qualificationExperiences/QualificationExperiences";

export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <AboutMeComponent/>
      <MySkillsComponent/>
      <QualificationExperiences/>
      <ProjectCardsComponent/>
      <ContactUsComponent/>
    </div>
  );
}
