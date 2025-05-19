
import { useTranslation } from "react-i18next";
const Block1 = () => {
  const { t } = useTranslation();

  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/work-1.png",
       titleKey: "WorkBlock.FreeResumeAssessments.Title",
      textKey: "WorkBlock.FreeResumeAssessments.Text",
    },
    {
      id: 2,
      icon: "/images/resource/work-2.png",
      titleKey: "WorkBlock.JobFitScoring.Title",
      textKey: "WorkBlock.JobFitScoring.Text",
    },
    {
      id: 3,
      icon: "/images/resource/work-3.png",
       titleKey: "WorkBlock.HelpEveryStep.Title",
      textKey: "WorkBlock.HelpEveryStep.Text",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <img src={item.icon} alt={t(item.titleKey)} />
            </figure>
            <h5>{t(item.titleKey)}</h5>
            <p>{t(item.textKey)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;
