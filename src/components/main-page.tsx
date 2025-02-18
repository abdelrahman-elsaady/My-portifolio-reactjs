"use client"
import { Navbar } from "@/components/navbar";
import { AboutMe, Hero, Projects, Tecnologies } from "@/components/sections";
import { cn } from "@/lib/utils";
import { Texts } from "@/types/texts";
import { texts as textBases } from "@/config/constants";
import { ParticlesBG } from "./particles";
import { Experiences } from "./sections/experiences";
import { LanguageSwitch } from "./language-switch";
import { Contact } from "./sections/contact";

interface Props {
  texts?: Texts;
}

export const MainPage = ({ texts = textBases["pt-br"] }: Props) => {

  const handleClick = async () => {
    const response = await fetch('https://mariam-api.vercel.app/api/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'someone clicked on your portfolio', timestamp: new Date() }),
    });
    if (!response.ok) {
      console.error('Failed to log click');
    }
  };

  console.log("kugiuk");

  return (
    <main onClick={handleClick}>
      <Navbar text={texts.navbar} />
      <ParticlesBG />
      <Hero texts={texts.hero} />
      <AboutMe texts={texts.aboutMe} />
      {/* <Experiences texts={texts.workExperience} /> */}
      <Tecnologies techTexts={texts.technologies} />
      <Projects projectText={texts.projects} />
      <Contact texts={texts.contact} />
      {/* <LanguageSwitch /> */}
    </main>
  );
};
