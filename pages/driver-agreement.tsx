import React from "react";
import { Helmet } from "react-helmet";
import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { useLanguage } from "../helpers/useLanguage";
import { driverAgreementData } from "./driver-agreement.data";

const DriverAgreementPage = () => {
  const { language } = useLanguage();
  const activeLang = (language === "en" || language === "tr" || language === "ar" ? language : "tr") as "tr" | "en" | "ar";
  const data = driverAgreementData[activeLang];

  const sections: LegalSection[] = data.sections.map((section) => ({
    id: section.id,
    title: section.title,
    content: (
      <>
        {section.blocks.map((block, i) => {
          if (block.type === "p" && block.text) {
            return <p key={i}>{block.text}</p>;
          }
          if (block.type === "h3" && block.text) {
            return <h3 key={i}>{block.text}</h3>;
          }
          if (block.type === "ul" && block.items) {
            return (
              <ul key={i}>
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === "ol" && block.items) {
            return (
              <ol key={i}>
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            );
          }
          return null;
        })}
      </>
    ),
  }));

  return (
    <>
      <Helmet>
        <title>{data.title} | VisitExtra</title>
        <meta
          name="description"
          content={`${data.title} page for VisitExtra.`}
        />
      </Helmet>
      <LegalLayout
        title={data.title}
        lastUpdated={data.lastUpdated}
        sections={sections}
      />
    </>
  );
};

export default DriverAgreementPage;
