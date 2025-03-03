function getData(data){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data is" ,data);
            resolve("success");
        },6000);
    })
}

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        console.log(res);
    });