/*    <body style="background-color: #282828; margin: 0px;">
        <div id = "tabBar">
            <p class="tabButtons" onclick = "location.href = 'index.html'">index.html</p>
            <p class="tabButtons" onclick = "location.href = 'styleCSS.html'">main.py</p>
            <p class="tabButtons" onclick = "location.href = 'srcJS.html'"> src.js</p>
        </div>
    
    <div id="mainTextEditor">
        <div id = "tabLines">
            <!-- 1<br>
            2<br>
            3<br>
            4<br>
            5<br>
            6<br>
            7<br> -->
        </div>
        <div id = "displayedCode">
            <code>&lt;!--Hover over the code to see the comments made--&gt;</code><br>
            <code></code><br>
            <code>&lt;html&gt;</code><br>
            <new-indent></new-indent><code>&lt;head&gt;</code><br>
            <code></code><br>
            <new-indent></new-indent><code>&lt;/head&gt;</code><br>
            <new-indent></new-indent><code>&lt;body&gt;</code><br>
            <code></code><br>
            <new-indent></new-indent><code>&lt;/body&gt;</code><br>
            <code>&lt;/html&gt;</code>
        </div>
      <script>
        </script>
</html>*/

function defaultPage(){
    var defaultHTML = document.createElement("html")
    defaultHTML.innerHTML = `
    <head>
        <link rel = "stylesheet" href = "base.css"></link>
    </head>
    <body style="background-color: #282828; margin: 0px;">
        <div id = "tabBar">
            <p class="tabButtons" onclick = "location.href = 'index.html'">index.md</p>
            <p class="tabButtons" onclick = "location.href = 'styleCSS.html'">main.py</p>
            <p class="tabButtons" onclick = "location.href = 'srcJS.html'"> src.js</p>
        </div>

        <div id="mainTextEditor">
            <div id = "tabLines">
                <!-- 1<br>
                2<br>
                3<br>
                4<br>
                5<br>
                6<br>
                7<br> -->
            </div>
            <div id = "displayedCode">
            </div>
        </div>
    </body>`    
    console.log("Hello World!")
    document.getElementById("Test").appendChild(defaultHTML)
}

defaultPage()

var codeLength = document.getElementsByTagName("code").length

for(var x = 0; x < codeLength; x++){
    var newNumber = document.createElement("p")
    var newNumberPannel = document.createElement("div")

    newNumber.innerText = String(x) + "  " + newNumber.innerText

    //newNumber.innerHTML += document.getElementsByTagName("code")[x].getAttribute("data") != null ? '': '<p style="color: transparent;background-clip: text;background-image: linear-gradient(red, blue);height: 20px;top: -7px;margin: 0px 0px 0px 6px;width: fit-content;position: relative;">🚩</p>'
    /*if(document.getElementsByTagName("code")[x].getAttribute("data") != null){
        newNumber.style.margin = `0px 8px 0px 0px`
    }
    else{*/
        newNumber.style.margin = `0px 8px 0px 0px`
    // }
    console.log(`${parseInt(document.getElementsByTagName("code")[x].getAttribute("data"))}px`)

    document.getElementsByTagName("code")[x].style.left = `${-8 * String(x).length + 8}px`

    document.getElementsByTagName("code")[x].style.position = "relative"

    newNumber.style.height = "15px"
    newNumber.style.display = "flex"
    newNumber.style.width = "fit-content"

    newNumberPannel.appendChild(newNumber)

    console.log("X value is", x)

    console.log("Appending", document.getElementsByTagName("code")[x])


    for(var y = 0; y < document.getElementsByTagName("new-indent").length; y++){
        document.getElementsByTagName("new-indent")[x].style.marginLeft = "8px"
    }

    if(document.getElementsByTagName("code")[x].getElementsByTagName("hover-flag").length == 0){
        document.getElementsByTagName("code")[x].insertBefore(newNumberPannel, document.getElementsByTagName("code")[x].childNodes[0])
        continue
    }

    console.log("Code Length is", document.getElementsByTagName("code").length)
    
    document.getElementsByTagName("code")[x].insertBefore(newNumberPannel, document.getElementsByTagName("code")[x].childNodes[1]) 
    document.getElementsByTagName("code")[x].style.left = `${-8 * String(x).length - 8}px`
    document.getElementsByTagName("code")[x].style.position = "relative"
    // return
}

for(var hoverOver = 0; hoverOver < document.getElementsByTagName("hover-over").length; hoverOver++){
    document.getElementsByTagName("hover-over")[hoverOver].addEventListener("mousedown", (e) => {displayComments(e)})
}

function displayComments(e){
    for(var hoverText = 0; hoverText < document.getElementsByTagName("hover-text").length; hoverText++){
        if(e.target.parentElement.getElementsByTagName("hover-text")[0] != document.getElementsByTagName("hover-text")[hoverText]){
            document.getElementsByTagName("hover-text")[hoverText].style.display = "none"
        }
    }
    console.log("Is selecting", e.target.parentElement.getElementsByTagName("hover-text")[0])
    if(e.target.parentElement.getElementsByTagName("hover-text")[0].style.display == "block"){
        e.target.parentElement.getElementsByTagName("hover-text")[0].style.display = "none"
        return
    }
    e.target.parentElement.getElementsByTagName("hover-text")[0].style.display = "block"

}