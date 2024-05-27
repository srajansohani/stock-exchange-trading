
const hello = async()=>{
    for(let i = 0; i < 4;i++){
        console.log("srajan");
        await new Promise(resolve=>setTimeout(resolve,5000));
        console.log(i);
    }
}

hello();