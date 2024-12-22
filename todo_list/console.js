let formy = document.querySelector("form");
let ol = document.querySelector("ol");

formy.addEventListener("submit",function(event) {
  
    event.preventDefault();
    let inp = document.querySelector("input");
    let li2 = document.createElement("li");
    li2.textContent = inp.value;
    ol.appendChild(li2);
    inp.value = "";
    console.log("task added");
    let btn = document.createElement("button");
        btn.textContent = "Delete";
        ol.children[ol.children.length-1].appendChild(btn);
        btn.style.margin = "1rem";
        
            ol.children[ol.children.length-1].addEventListener("click",function() {
                
                this.style.textDecoration = "line-through";
                console.log("task deleted");
           })
   
}) 


   
    

 

    

