import AboutMeComponent from "@/components/aboutMe/AboutMeComponent";
import HeroSectionComponent from "@/components/heroSection/HeroSectionComponent";
import MySkillsComponent from "@/components/mySkills/MySkillsComponent";
import QualificationExperiences from "@/components/qualificationExperiences/QualificationExperiences";

export default function Home() {
  return (
    <div>
      <HeroSectionComponent />
      <AboutMeComponent/>
      <MySkillsComponent/>
      <QualificationExperiences/>
    </div>
  );
}
