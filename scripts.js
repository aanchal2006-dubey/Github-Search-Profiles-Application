// script.js

let api = "https://api.github.com/users/";

// Load Axios properly
let axiosScript = document.createElement("script");
axiosScript.src = "https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js";
axiosScript.crossOrigin = "anonymous";
document.head.appendChild(axiosScript);

let main = document.getElementById("main");
let inputForm = document.getElementById("userInput");
let inputBox = document.getElementById("inputBox");

// Get User Data
const userGetFunction = (name) => {
    axios.get(api + name)
        .then((response) => {
            userCard(response.data);
            repoGetFunction(name);
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
                errorFunction("No profile with this username");
            } else {
                errorFunction("Something went wrong");
            }
        });
};

// Get Repository Data
const repoGetFunction = (name) => {
    axios.get(api + name + "/repos?sort=created")
        .then((response) => {
            repoCardFunction(response.data);
        })
        .catch(() => {
            errorFunction("Problem fetching repos");
        });
};

// Create User Card
const userCard = (user) => {
    let id = user.name || user.login;
    let bio = user.bio ? `<p>${user.bio}</p>` : "";

    let cardElement = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" 
                     alt="${id}" 
                     class="avatar">
            </div>

            <div class="user-info">
                <h2>${id}</h2>
                ${bio}
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardElement;
};

// Error Card
const errorFunction = (error) => {
    main.innerHTML = `
        <div class="card">
            <h1>${error}</h1>
        </div>
    `;
};

// Show Repositories
const repoCardFunction = (repos) => {
    let reposElement = document.getElementById("repos");
    reposElement.innerHTML = "";

    for (let i = 0; i < 5 && i < repos.length; i++) {
        let repo = repos[i];
        let repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposElement.appendChild(repoEl);
    }
};

// Form Submit
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = inputBox.value.trim();

    if (user) {
        userGetFunction(user);
        inputBox.value = "";
    }
});