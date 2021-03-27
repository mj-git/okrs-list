export default function AccordionChildren({ content }) {
    return <ul className="content">{content.length && content.map((childContent) => <li key={`child-objective-${childContent.id}`}>{childContent.title}</li>)}</ul>;
}
