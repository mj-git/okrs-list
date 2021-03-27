const responseToJSON = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw Error('Response not OK', response.status, response.url);
    }
};

export const fetchOKRs = async () => {
    return fetch('db.json', {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(responseToJSON);
};
