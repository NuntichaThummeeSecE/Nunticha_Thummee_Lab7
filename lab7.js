function addListFunction(){
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("list").appendChild(newItem);

}
document.getElementById("addButton").addEventListener("click", addListFunction);
