function addNewItem() {
    if (document.getElementById("addBox").value != "") {
        let element = document.getElementById("list");
        let para = document.createElement("li");
        var check = document.createElement("input")
        para.id = "itemid"
        check.type = "checkbox";
        check.name = "checker";
        check.id = "checkerid";
        check.className = "checkerclass";
        para.innerHTML = document.getElementById("addBox").value;
        para.appendChild(check)
        element.appendChild(para)
        document.getElementById("addBox").value = ''
        check.addEventListener('click', event => {
            if(check.parentElement.style.textDecoration != "line-through"){
                check.parentElement.style.textDecoration = "line-through";
            } else {
                check.parentElement.style.textDecoration = "none"
            }
        });
    }
}








