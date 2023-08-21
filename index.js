
    const inputBox = document.getElementById("inputBox");
    inputBox.focus();
    function buttonOnClick() {
        let url = `https://google.com/search?q=${inputBox.value}`;
        window.open(url);
    }

    document.onkeydown = e => {
        if (e.keyCode == 13) buttonOnClick()
    }

