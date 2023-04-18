function makeBigger() {
    document.getElementById("inputText-1").style.fontSize = "24pt";
} 

function makeFancy() {
    alert("You selected FancyShmancy!");
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration= "underline"
}

function makeBoring() {
    alert("You selected BoringBetty.");
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black";
    document.getElementById("inputText-1").style.textDecoration= "initial"
}

function makeMoo() {
    alert("You selected Moo!");
    var result = document.getElementById("inputText-1").value.toUpperCase();
    document.getElementById("inputText-1").value = result;
    var str = document.getElementById("inputText-1").value.split(".");
    var str2 = str.join("-Moo");
    var str3 = str2.concat(".");
    document.getElementById("inputText-1").value = str3;

}
    