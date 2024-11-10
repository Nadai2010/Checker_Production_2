import DownloadMarquis from "./DownloadMarquis";
import GamesSlider from "./GamesSlider";
import Introduce from "./Introduce";
import LeaderBoard from "./LeaderBoard";
import MarquisMobile from "./MarquisMobile";
import SignupSection from "./SignupSection";
import CheckerSection from "./CheckerSection";
import "./style.css";
import Technical from "./Technical";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-col lg:gap-[200px] gap-[36px]">
        <CheckerSection />
        <SignupSection />
        <Introduce />
        <GamesSlider />
        <div>
          <MarquisMobile />
          <LeaderBoard />
        </div>
        <DownloadMarquis />
        <Technical />
      </div>
    </div>
  );
}
