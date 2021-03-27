import { useState } from 'react';
export default function AccordionHeader({ title }) {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
            <h2 className="handle">
                <label htmlFor="handle1">{title}</label>
            </h2>
        </>
    );
}
