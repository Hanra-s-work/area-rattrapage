function update_username(element) {
    console.log("update_username called");
    element.innerText = "Sample User";
    const username = window.cookie_manager.read("username");
    if (username) {
        element.innerText = username;
    }
    console.log("update_username finished");
}
