import { useEffect, useState } from "react";
import axios from "axios";

const TypeB = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [skillsetData, setSkillsetData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("/data/PortfolioListMockData.json"),
        axios.get("/data/SkillsetMockData.json"),
      ])
      .then(
        axios.spread((responseA, responseB) => {
          setPortfolioData(responseA.data.result.reverse());
          setSkillsetData(responseB.data.result);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="w-screen bg-[url('/images/bg_square.png')] bg-auto bg-repeat">
      <div className="flex flex-col w-3/4 lg:w-2/3 m-auto py-8">
        {/* Intro */}
        <section className="flex flex-col justify-center items-center w-full h-full py-8">
          <h1 className="text-6xl font-bold">
            안녕하세요.
            <br />
            {/* 자신의 이름으로 변경합니다. */}
            저는 OOO입니다.
          </h1>
        </section>

        {/* Portfolio */}
        <section className="py-8">
          <h2 className="text-3xl font-semibold">Portfolio</h2>
          <ol>
            {/* 이 li 기준으로 커리어를 정리합니다. */}
            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
              <div className="basis-0 lg:basis-60">
                <h3 className="text-2xl">위코드</h3>
                <span className="font-thin text-[#555]">2023.08 - 2023.11</span>
              </div>

              <ol className="flex-1">
                <li>
                  <ul className="flex flex-col gap-8">
                    {/* 데이터 순서는 mock data의 역순입니다. 따라서 mock data에 오래된 프로젝트부터 기입하시면 됩니다. */}
                    {portfolioData.map(
                      (
                        {
                          targetDevice,
                          deployUrl,
                          projectName,
                          description,
                          techStacks,
                          mainTask,
                          repoUrl,
                        },
                        index
                      ) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col gap-2 relative"
                          >
                            <h4 className="flex items-center">
                              {/* 타겟 디바이스의 값에 따라 다른 뱃지를 노출합니다. */}
                              {targetDevice && (
                                <div className="flex gap-1">
                                  {targetDevice === "pc" && (
                                    <span className="inline-block px-2 py-1 rounded-md bg-primary text-xs text-[#fff] whitespace-nowrap">
                                      pc
                                    </span>
                                  )}
                                  {targetDevice === "mobile" && (
                                    <span className="inline-block px-2 py-1 rounded-md bg-secondary text-xs text-[#fff] whitespace-nowrap">
                                      mobile
                                    </span>
                                  )}
                                  {targetDevice === "responsive" && (
                                    <span className="inline-block px-2 py-1 rounded-md bg-tertiary text-xs text-[#fff] whitespace-nowrap">
                                      responsive
                                    </span>
                                  )}
                                </div>
                              )}
                              <a
                                href={deployUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 pr-10 text-2xl truncate hover:font-semibold active:font-bold"
                              >
                                {projectName}
                              </a>
                            </h4>
                            <ul className="flex flex-col gap-2 pl-3">
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>간략 설명</h5>
                                <span>{description}</span>
                              </li>
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>기술 스택</h5>
                                <span>{techStacks.join(", ")}</span>
                              </li>
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>주요 작업</h5>
                                <span>{mainTask.join(", ")}</span>
                              </li>
                            </ul>
                            <a
                              href={repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-0 right-0 w-8 h-8"
                            >
                              <img
                                src="/images/contact/github.svg"
                                alt="깃헙 저장소 링크"
                              />
                            </a>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </section>

        {/* Skillset */}
        <section className="py-8">
          <h2 className="text-3xl font-semibold">Skillset</h2>
          <ol>
            {/* 이 li 기준으로 스킬셋을 추가합니다. 예를 들어, 워드 프로세스 자격증을 기입하고 싶다면 li 추가 후 h3에 자격증이라 넣고, 내용을 삽입합니다. */}
            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
              <div className="basis-0 lg:basis-60">
                <h3 className="text-2xl">Front-End</h3>
              </div>

              <ol className="flex-1">
                <li>
                  <ul className="flex flex-col gap-8">
                    {skillsetData.map(
                      ({ stackImage, stackName, description }, index) => {
                        return (
                          <li key={index} className="flex flex-col gap-2">
                            <h4 className="flex items-center gap-1 text-2xl">
                              <img
                                src={stackImage}
                                alt={`${stackImage} 로고`}
                                className="w-6 h-6"
                              />
                              {stackName}
                            </h4>
                            <ul className="flex flex-col gap-2 pl-3">
                              {description.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section className="py-8">
          <div className="flex justify-between items-center py-6 before:content-[''] before:block before:w-0 before:h-full lg:before:w60">
            <div className="flex items-end lg:items-center gap-4 lg:flex-row">
              <div className="flex flex-col items-end gap-4">
                <h2 className="text-base text-right font-semibold">
                  {/* 자신의 이름으로 변경합니다. */}
                  Marlowe
                  <em className="block text-xs font-thin text-[#555 not-italic tracking-wide">
                    Front-End Developer
                  </em>
                </h2>

                {/* 추가하고 싶은 아이콘을 추가하여 외부 링크를 연결합니다. 아이콘 목록은 facebook, github, gmail, instagram, linkedin, velog가 있습니다. */}
                <ul className="flex gap-2">
                  <li>
                    <a href="mailto:email" className="block w-8 h-8">
                      <img src="/images/contact/gmail.svg" alt="gmail" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block w-8 h-8">
                      <img src="/images/contact/github.svg" alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block w-8 h-8">
                      <img src="/images/contact/velog.svg" alt="velog" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative w-16 h-16 lg:w-24 lg:h-24">
                {/* 프로필 사진 또는 자신만의 캐릭터 이미지를 추가합니다. */}
                <img
                  src="/images/profile.png"
                  alt="OOO 프로필 사진"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TypeB;
