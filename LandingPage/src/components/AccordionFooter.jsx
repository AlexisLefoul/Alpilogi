import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const AccordionFooter = () => {
  const items = [
    {
      uuid: 1,
      heading: "Informations légales",
      content: "- CGV " + " - Mentions légales",
    },
    {
      uuid: 2,
      heading: "Confidentialité",
      content: "In pariatur excepteur ut do aliquip qui mollit",
    },
    {
      uuid: 3,
      heading: "Aide",
      content: "In pariatur excepteur ut do aliquip qui mollit",
    },
  ];
  return (
    <>
      <div className="contener">
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p style={{ margin: 0, fontSize: 24 }}>Informations légales</p>
                <div className="chevron"></div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ marginTop: 0 }}>- CGV </p>
              <p style={{ marginTop: 0 }}>- Mentions légales</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p style={{ margin: 0, fontSize: 24 }}>Confidentialité</p>
                <div className="chevron"></div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ marginTop: 0 }}>- Cookies </p>
              <p style={{ marginTop: 0 }}>- RGPD</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p style={{ margin: 0, fontSize: 24 }}>Aide</p>
                <div className="chevron"></div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p style={{ marginTop: 0 }}>- Nous contacter </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionFooter;
