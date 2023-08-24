import { TeamPage_1, TeamPage_2, TeamPage_3 } from "./Pages/Pages";

const Team = () => {
    const className = {
      container: "w-full font-Roboto text-white",
    };

    return(
        <div className={className.container}>
          <TeamPage_1 />
          <TeamPage_2 />
          <TeamPage_3 />
        </div>
    )
}

export default Team;