const container = document.getElementById('chats');
let fruits = ["Bruce", "Peter", "Iron Man","Black Widow","Barry Allen"];
let logos = ["logos/amzlogo.jpeg","logos/goologo.png","logos/jaglogo.png","logos/jplogo.png","logos/netlogo.jpg"];
for (let i = 0; i < 5; i++) {
    
    // Create a new div element
    const newDiv = document.createElement('div');
    // Give it a class (optional, for styling)
    newDiv.className = 'static-block';
    
    // Insert your static content
    newDiv.innerHTML = `
        <div class="peoplearea">
        <div class="people_list">
            <div class="profileimg">
                <img src="${logos[i]}">
            </div>
            <div class="namelastmsg">
                <p class="cn">${fruits[i]}<p>
                <p class="cn">time here</p><p class="cn">"Hello How are you doing"</p>
            </div>
        </div>
        </div>
    `;
    
    // Add it to the page
    container.appendChild(newDiv);
}
