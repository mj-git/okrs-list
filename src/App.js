import { useState, useEffect, useMemo } from 'react';
import OKRAccordion from './OKRAccordion';
import { fetchOKRs } from './utils';
import { processOKRData } from './logic';
function App() {
    const [okrs, setOkrs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchOKRs();
            setOkrs(response.data);
        };
        fetchData();
    }, []);

    const [parentObjectives, childObjectivesByParent] = useMemo(() => processOKRData(okrs), [okrs]);

    return (
        <div className="app-container">
            {parentObjectives &&
                parentObjectives.map((objective) => {
                    return <OKRAccordion key={`okr-${objective.id}`} parentObjective={objective} childObjectives={childObjectivesByParent[objective.id]} />;
                })}
        </div>
    );
}

export default App;
