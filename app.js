let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click", async function(){
    try{
        left = await getData();
        para.innerText = left; 
    } catch (e) {
        para.innerText = "Some Error Occur :(";
    }
});


let link = 'https://catfact.ninja/fact';
 
async function getData(){
    let res = await axios.get(link);
    console.log(res.data.fact);
    return res.data.fact;
}