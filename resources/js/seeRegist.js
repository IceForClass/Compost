export function seeRegist(composterId) {
    
    fetchData(`/api/users/${idUser}/regist/`).then((data) => {
        console.log(data);
    });
}