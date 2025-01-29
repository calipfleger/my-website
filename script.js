document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        { title: "AI in Medicine", link: "#" },
        { title: "Climate Change Effects", link: "#" },
        { title: "Quantum Computing Breakthrough", link: "#" }
    ];

    let articleList = document.getElementById("articles");
    
    articles.forEach(article => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${article.link}">${article.title}</a>`;
        articleList.appendChild(li);
    });
});

