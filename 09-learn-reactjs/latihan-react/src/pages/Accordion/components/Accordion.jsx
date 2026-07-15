import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          number={index + 1}
          curOpen={curOpen}
          onOpen={setIsOpen}
          question={faq.question}
          answer={faq.answer}
          key={index}
        />
      ))}
    </div>
  );
}
