const fetchData = () => {
    fetch('../data/youtube.json')
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                return (res.message)
            }
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
};

export default fetchData;
