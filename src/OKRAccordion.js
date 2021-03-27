import React from 'react';
import AccordionHeader from './components/AccordionHeader';
import AccordionChildren from './components/AccordionChildren';

export default function OKRAccordion({ parentObjective, childObjectives }) {
    return (
        <section className="accordion">
            <AccordionHeader title={parentObjective.title} headerId={parentObjective.id} />
            <AccordionChildren content={childObjectives} />
        </section>
    );
}
