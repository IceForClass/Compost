fetchData("/api/bolo/").then((data) => {
    const boloData = data.data;
    boloData.forEach((bolo) => {
        console.log(bolo.name);
        console.log(bolo.cicle1);
    });
});
