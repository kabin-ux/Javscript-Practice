const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");

const getUser = async(username) => {
    const response = await fetch(APIURL + username)
    const data = await response.json()
    console.log(data);

    const card = `
    <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.login}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.follwing}<strong>Following</strong></li>
                    <li>${data.pulic_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
          
                </div>
            </div>
        </div>`

    main.innerHTML = card;
    getRepos(username)
} 

const getRepos = async(username) => {
    const repos = document.querySelector("#repos");

    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();

    data.forEach((item) => {
        const element = document.createElement("a");
        element.classList.add("repo");
        element.href = item.html_url;
        element.innerText = item.name;
        element.target = "_blank";
        repos.appendChild(element)
    });
}

const formSubmit = () => {
    const searchBox = document.querySelector("#search");

    if (searchBox.value != ""){
        getUser(searchBox.value);
        searchBox.value  = "";
    }

    return false;
}
// init call
getUser("romeojeremiah")

{/* <a class="repo" href="#" target="_blank">Repo 1</a>
<a class="repo" href="#" target="_blank">Repo 2</a>
<a class="repo" href="#" target="_blank">Repo 3</a>  */}