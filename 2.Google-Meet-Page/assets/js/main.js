let messageIcon = document.querySelector("#message-icon");
let messageSideBar = document.querySelector("#message-sidebar");

messageIcon.addEventListener("click", () => {
    console.log("clicked");
    
    if(messageSideBar.style.display === "none" || messageSideBar.style.display === "") {
        console.log("settin block");
        
        messageSideBar.style.display = "block";
    } else{
        messageSideBar.style.display = "none"
        console.log("settin none");
    }
});

let asideContainer = document.getElementById("aside-container");
let peopleHideIcon = document.getElementById("people-hide-icon");
let peopleGroup = document.getElementById("people-group");

peopleHideIcon.addEventListener("click", () => {
    //console.log("clicked.");
    asideContainer.style.display = "none";
});

peopleGroup.addEventListener("click", () => {
    asideContainer.style.display = "block";
});


//Add People Popup
let addPeople = document.querySelector(".add-people");
let popupToAddPeople = document.querySelector(".popup");

addPeople.addEventListener("click", () => {
    popupToAddPeople.style.display = "block";
});

//hide popup
let hidePopup = document.querySelector("#hide-popup");

hidePopup.addEventListener("click", () => {
    popupToAddPeople.style.display = "none";
})

