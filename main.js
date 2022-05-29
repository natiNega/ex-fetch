const button = document.querySelector('#id_btn');
const fildText = document.querySelector('#id_div');
const img = document.querySelector('#id_img');



button.onclick = function details() {
    const res = fetch("https://randomuser.me/api/");
    
res.then(function (matafa) {
    return("ok",matafa.json());
})
.then(function (matafa2) {
    // console.log('ok',matafa2);

        const firstName = matafa2.results[0].name.first;
        id_p1.textContent = "first Name: " + firstName;
    
        const lastName = matafa2.results[0].name.last;
        id_p2.textContent = "Last Name: " + lastName;


        const email = matafa2.results[0].email;
        id_p3.textContent = "email: " + email;


        const picture = matafa2.results[0].picture.large;
        img.src = picture;
     
        
    } )
   
    .catch (function (matafa) {
        console.log("Error",matafa);
    })
    
}
// location.reload();


// function show(arr) {
     
  
//     return arr
// }
