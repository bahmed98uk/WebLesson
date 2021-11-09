function SayHello() {
    window.alert("Hello there")
    document.getElementById("greeting").innerHTML= "Good morning";
    console.log("Hi everyone")
}
function ChangeStyle(obj, oldStyle, newStyle){
    obj.classList.remove(oldStyle);
    obj.classList.add(newStyle);
}
function AddALine(obj){
    let para = document.createElement("p");
    let textNode = document.createTextNode("Hey Jude");
    para.appendChild(textNode);
    obj.appendChild(para);
}
function DeleteLastLine(obj){
    let elements = obj.getElementsByTagName('p');
    if(elements.length > 0){
        obj.removeChild(elements[elements.length-1]);
    }
}