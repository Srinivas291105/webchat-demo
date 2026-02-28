const container = document.getElementById('chats');
let fruits = ["Sai Srinivas sarikonda", "feeds", "Iron Man","Black Widow","Barry Allen"];
let logos = ["logos/amzlogo.jpeg","logos/goologo.png","logos/jaglogo.png","logos/jplogo.png","logos/netlogo.jpg"];
for (let i = 0; i < 5; i++) {
    
    // Create a new div element
    const newDiv = document.createElement('div');
    // Give it a class (optional, for styling)
    newDiv.className = 'static-block';
    
    // Insert your static content
    newDiv.innerHTML = `
        <div class="peoplearea">
        <div class="people_list" role="button" tabindex="0" onclick="window.location.href='${fruits[i]}.html'">
            <div class="profileimg">
                <img src="${logos[i]}" class="pfpicons">
            </div>
            <div class="namelastmsg">
                <p class="pername">${fruits[i]}<p>
                <p class="tme">time here</p>
                <p class="lsmsg">"Hello How are you doing"</p>
            </div>
        </div>                                                          
        </div>
    `;
    
    // Add it to the page
    container.appendChild(newDiv);
}
