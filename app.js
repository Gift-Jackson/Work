function user() {
    var name = document.getElementById('name');
    var input = document.getElementById('input');
    var feed = document.getElementById('feedback');
    if(input == "") {
        feed.textContent = "Please Input Your Name!";
        console.log(feed);
    }
    var userName = input.value;
    name.textContent = userName+"!";
    
    var container = document.querySelector('.parent');
    var dash = document.getElementById('dashboard');
    container.style.top = '-100vh';
    dash.style.transform = 'scale(1)';
    
    
}
