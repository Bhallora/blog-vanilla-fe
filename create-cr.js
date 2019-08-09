function postData(event) {
    event.preventDefault();
    let tittle = document.getElementById("textId").value;
    let innerContent = document.getElementById("innerContentId").value;
    fetch('http://localhost:5000/api/create', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tittle: tittle,
                innerContent: innerContent
            })
        }).then((res) =>
            res.json()

        )
        .then(
            console.log
        )
        .catch((err) =>
            console.log(err)
        )

}