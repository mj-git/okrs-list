export const processOKRData = (okrs) => {
    if (okrs.length) {
        const parentObjectives = [];

        const childObjectivesByParent = {};

        okrs.forEach((okr) => {
            if (okr.parent_objective_id === '') {
                parentObjectives.push(okr);
                childObjectivesByParent[okr.id] = childObjectivesByParent[okr.id] || [];
            } else {
                if (childObjectivesByParent[okr.parent_objective_id]) {
                    childObjectivesByParent[okr.parent_objective_id].push(okr);
                } else {
                    childObjectivesByParent[okr.parent_objective_id] = [okr];
                }
            }
        });

        return [parentObjectives, childObjectivesByParent];
    }
    return [];
};
