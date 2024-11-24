const URL = "https://api.github.com/users/letscodewithkalyan";
async function loadUser(){
    const response = await fetch(URL);
    const userInfo = await response.json();
    console.log(userInfo);
}
loadUser().catch((err) => console.log(err));