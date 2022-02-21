const modal = function(){
    // 버튼을 클릭하면 modal 창을 보이게
     const btn = document.querySelector(".source-btn")
     const modal1 = document.querySelector("#modal")
     btn.addEventListener("click", ()=>{
         modal1.classList.add("show")
     })
     document.querySelector(".source-btn").addEventListener("click", () => {
         document.querySelector("#modal").classList.add("show");
         document.querySelector("#modal").classList.remove("hide")
     });
     document.querySelector(".modal-close").addEventListener("click", () => {
         document.querySelector("#modal").classList.add("hide");
     });       
 }


 //tabmenu
     const tabMenu = function(){
     const tabBtn = document.querySelectorAll(".menu-bar span");
     const tabCont = document.querySelectorAll(".content-container .main > div");

     //각각의 버튼을 클릭하면 경고창을
     tabBtn.forEach((btn, index) => {     //tabBtn에 있는 모든 btn에 대해 
         btn.addEventListener("click", () => {   //클릭했을 때 
            // 내가 클릭하지 않은건 active 삭제  
             // tabBtn.forEach(el => {            //tabBtn이 갖고 있는 모든 버튼에서 active클래스를 지운다.
             //     el.classList.remove("active") 
             // })
             for(let i=0; i<tabBtn.length; i++){
                 tabBtn[i].classList.remove("active")
             }
            

             btn.classList.add("active");         //그리고 클릭한 btn만 active를 추가한다.
             //내가 클릭한건 active 추가  

             tabCont.forEach(el => {
              el.style.display ="none"
             })
             tabCont[index].style.display = "block"; //tabBtn과 tabCont가 무엇이 같은지 생각해보자
                                                    //클릭했을 때 클릭한것에 해당하는 값을 어떻게 찾아올지 생각
         })
     })    
 }