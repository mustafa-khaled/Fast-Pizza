import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import team1 from "../assets/team-1a.jpg";
import team2 from "../assets/team-2a.jpg";
import team3 from "../assets/team-3a.jpg";
import team4 from "../assets/team-4a.jpg";

const team = [team1, team2, team3, team4];
function Team() {
  return (
    <div className="mt-[10px] flex flex-wrap items-center gap-[10px]">
      {team.map((el) => {
        return (
          <div
            key={el}
            className="member-box relative w-full overflow-hidden sm:w-[calc(100%/2-10px)] md:w-[calc(100%/4-10px)]"
          >
            <img src={el} alt="team member" className="w-full" />

            <div className="member-info bg-lightGray absolute left-0 top-0 h-full w-full p-[10px] opacity-[0.0] transition-all">
              <div
                className="flex h-full flex-col items-center justify-center gap-[10px] bg-primary p-[10px]
                 text-center font-bold text-bgWhite"
              >
                <h4 className="text-xl">Mustafa Khaled</h4>
                <p className="text-sm text-bgWhite">Front End Developer</p>
                <div className="flex items-center justify-center gap-[10px]">
                  <Link
                    to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
                    target="_blank"
                  >
                    <AiFillLinkedin className="cursor-pointer text-2xl hover:text-gray" />
                  </Link>
                  <Link
                    to={"https://github.com/mustafa-khaled"}
                    target="_blank"
                  >
                    <AiFillGithub className="cursor-pointer text-2xl hover:text-gray" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
