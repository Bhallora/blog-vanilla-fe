function fillUp() {
    var one = document.createElement("h1");
    one.setAttribute("class", "head");
    one.textContent = document.getElementById("name").value;

    var two = document.createElement("h3");
    two.setAttribute("class", "head2");
    two.textContent = document.getElementById("author-name").value;

    var three = document.createElement("p");
    three.setAttribute("class", "para");
    three.textContent = document.getElementById("input-text").value;

    document.body.appendChild(one);
    document.body.appendChild(two);
    document.body.appendChild(three);
}