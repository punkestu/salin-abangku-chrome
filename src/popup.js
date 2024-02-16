document.querySelector("#gen").addEventListener("click", function () {
    let slang = document.querySelector("#slang").value;
    if (slang) {
        navigator.clipboard.writeText(document.querySelector("#slang").value);
    } else {
        document.querySelector("#gen").innerHTML = "Loading...";
        fetch("https://salin-abangku.vercel.app/api/one")
            .then((res) => res.json())
            .then((data) => {
                document.querySelector("#slang").value = data;
                document.querySelector("#gen").innerHTML = "Copy";
            });
    }
});
