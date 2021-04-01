import { useState, useEffect, useMemo } from 'react';
import OKRAccordion from './OKRAccordion';
import { fetchOKRs } from './utils';
import { processOKRData, getCategories } from './logic';
function App() {
    const [filteredOkrs, setFilteredOkrs] = useState([]);
    const [allOkrs, setAllOkrs] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchOKRs();
            setCategories(getCategories(response.data));
            setFilteredOkrs(response.data);
            setAllOkrs(response.data);
        };
        fetchData();
    }, []);

    const [parentObjectives, childObjectivesByParent] = useMemo(() => processOKRData(filteredOkrs), [filteredOkrs]);

    const handleChange = (event) => {
        if (event.target.value) {
            setFilteredOkrs(allOkrs.filter((okr) => okr.category === event.target.value));
        }
    };

    return (
        <div className="app-container">
            {categories && categories.length && (
                <select onChange={handleChange}>
                    {categories.map((category) => (
                        <option value={category} key={`categories_${category}`}>
                            {category}
                        </option>
                    ))}
                </select>
            )}

            {parentObjectives &&
                parentObjectives.map((objective) => {
                    return <OKRAccordion key={`okr-${objective.id}`} parentObjective={objective} childObjectives={childObjectivesByParent[objective.id]} />;
                })}
        </div>
    );
}

export default App;
