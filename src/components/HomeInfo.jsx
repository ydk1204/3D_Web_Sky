import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1 : (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">YDK</span> 👋
      <br />
      A FrontEnd Developer
    </h1>
  ),
  2 : (
    <InfoBox 
      text="게임 개발을 전공하고 웹 개발 부트 캠프와 개인 학습을 통해 개발 지식과 기술을 습득했습니다."
      link="/about"
      btnText="누구일까?"
    />
  ),
  3 : (
    <InfoBox 
      text="2번의 팀 프로젝트를 진행하고 다수의 개인 프로젝트를 제작했습니다."
      link="/projects"
      btnText="프로젝트 살펴보기"
    />
  ),
  4 : (
    <InfoBox 
      text="새로운 프로젝트를 만들기 위한 준비가 되어 있습니다, 더 궁금하다면 연락해주세요."
      link="/contact"
      btnText="소통해요"
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo