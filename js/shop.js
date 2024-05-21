let input = document.getElementById("search");
input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        search(input.innerText);
    }
});
input.focus();



let items = [
    {
        name: "Card",
        image: "img2.jpg",
        price: 1
    },
    {
        name: "Firma",
        image: "logo.png",
        price: 1
    }
];
let found = false;
let html = "";
function search(term){
    for(i in items){
        let item = items[i];
        if(item.name.toUpperCase().includes(term.toUpperCase())||term.toUpperCase().includes(item.name.toUpperCase())){
            add(item);
            found = true;
        }
    }
    if(found){
        push();
    }else{
        notFound(term);
    }
    found = false;
    html = "";
}

function add(item){
    html += `
    <div id="item" name="${item.name}">
        <div class="card" data-color="blue">
        <img class="card-front-image card-image" src="img/${item.image}" />
        <div class="card-faders">
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        <img class="card-fader card-image" src="img/${item.image}" />
        </div>
    </div>
    </div>`;
}

function push(){
    document.getElementById("items").innerHTML=html;
}

function notFound(term){
    alert("'"+term + "' wurde nicht gefunden");
}

search("");