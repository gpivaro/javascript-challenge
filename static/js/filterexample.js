const filter = {
    datetime: "1/1/2010",
    city: "benton",
};



var results = data.filter(item => {
    for (let key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
            return false;
    }
    return true;
});

console.log(results)