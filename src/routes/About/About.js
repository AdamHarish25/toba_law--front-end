import { AboutPage_1, AboutPage_2, AboutPage_3 } from "./Pages/Pages";

const About = () => {
    const className = {
      container: "w-full font-Roboto text-white",
    };

    return (
        <div className={className.container}>
            <AboutPage_1 />
            <AboutPage_2 />
            <AboutPage_3 />
        </div>
    )
}

export default About;