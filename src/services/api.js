function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/tv/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
    };

    if(body!==null){
        options.body=JSON.stringify(body);
    }

    return fetch(url,options);


}

async function getAllTelevizioare(){

    let data=await api("all",'GET');

    data=await data.json();

    return data;
}
 async function deleteTelevizor(televizorId){
    let data=await api(`delete/${televizorId}`,'DELETE');
 }

 async function deleteTelevizorByModel(model){
    let data=await api(`deleteTelevizorByModel/${model}`,'DELETE');
 }

 async function updateTelevizor(televizor){

    let data=await api(`update`,'PUT',televizor);

    return data;

 }

 async function sortByMarca(){
    let data=await api(`sortByMarca`,'GET');

    data=await data.json();

    return data;

 }

 async function sortByModel(){
    let data=await api(`sortByModel`,'GET');

    return data;
 }

 async function sortByPret(){

    let data=await api(`sortByPret`,'GET')

    data=await data.json();

    return data;
 }

 export {getAllTelevizioare,deleteTelevizorByModel,deleteTelevizor,updateTelevizor,sortByMarca,sortByModel,sortByPret}


