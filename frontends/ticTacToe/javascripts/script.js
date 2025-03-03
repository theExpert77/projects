let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rst_btn");

let cross = true;

let winCheck = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

console.log(winCheck);
const reset = () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled= false;
    })
};

rstBtn.addEventListener("click", reset);

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(cross){
            box.innerHTML = "X";
            cross = false;
        }
        else{
            box.innerHTML = "O";
            cross = true;
        }

        box.disabled = true;
        winCheck.forEach((val) => {
            // console.log(val);
            if(boxes[val[0]].innerHTML !="" && boxes[val[1]].innerHTML !="" && boxes[val[2]].innerHTML !=""){
                if(boxes[val[0]].innerHTML === boxes[val[1]].innerHTML && boxes[val[1]].innerHTML === boxes[val[2]].innerHTML){
                    console.log("winner", boxes[val[0]].innerHTML);
                    alert(`winner is ${boxes[val[0]].innerHTML}`);
                    reset();
                }
            }
           

            // val[0],val[1],val[2]
        })



        // console.log("box clicked");
    })
})