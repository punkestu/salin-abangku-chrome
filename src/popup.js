document.querySelector("#gen").addEventListener("click", function () {
    document.querySelector("#gen").innerHTML = "Loading...";
    fetch("https://salin-abangku.vercel.app/api/one")
        .then((res) => res.json())
        .then((data) => {
            document.querySelector("#slang").value = data;
            document.querySelector("#gen").innerHTML = "Regenerate";
            document.querySelector("#copy").classList.add("hover:opacity-100");
            document.querySelector("#copy").classList.add("duration-300");
        });
});

document.querySelector("#copy").addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#slang").value);
});
