let btn=document.querySelector(".toggle");
    btn.addEventListener("click",()=>{
        
        let toggle=document.querySelector(".navbar");
        toggle.classList.toggle("open");
    })
// popup message delete
    let popup=document.getElementById("popup");
    function remove(){
        popup.classList.add("openpopup");
    }
    function closepopup(){
        popup.classList.remove("openpopup");
    }

    // popup messeage update

    let popup_form=document.getElementById("popup-form");
    function update(){
        popup_form.classList.add("open-msg");
    }
    function clearmessage(){
        popup_form.classList.remove("open-msg");
    }