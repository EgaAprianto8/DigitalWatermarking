import AboutUs from '@/components/LandingPage/AboutUs'
import ContactUs from '@/components/LandingPage/ContactUs'
import HeroSectionLP from '@/components/LandingPage/HeroSectionLP'
import Project from '@/components/LandingPage/Project'

import SelectTheme from '@/components/LandingPage/SelectTheme'


export default function Home() {
  return (
   <>
    <HeroSectionLP/>
    <AboutUs/>
    <SelectTheme/>
    <Project/>
    <ContactUs/>
    
   </>
  )
}
