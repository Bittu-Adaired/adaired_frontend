import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FAQ[];
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  console.log(faqs);
  return (
    <div>
      <h2 className="text-[38px] font-nunito font-semibold text-gray-900">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible >
        {faqs.map((faq) => {
          return (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="data-[state=open]:bg-[#F8F8F8] p-6 data-[state=open]:rounded-lg data-[state=open]:border-b-0"
            >
              <AccordionTrigger className="font-bold text-[22px] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqSection;
