var createBudget = function () 
{
    let li = document.createElement('li');
    
    var div_card = document.createElement("div");
    div_card.classList.add("card");
    li.appendChild(div_card);

    var div_card_body = document.createElement("div");
    div_card_body.classList.add("card-body");
    div_card.appendChild(div_card_body);

    card_body_title = document.createElement("h4");
    card_body_title.classList.add("card-title");
    card_body_title.innerHTML = document.getElementById("headline_wish").value;

    card_body_subtitle = document.createElement("h6");
    card_body_subtitle.classList.add("card-subtitle");
    card_body_subtitle.classList.add("text-muted");
    card_body_subtitle.innerHTML = document.getElementById("price_wish").value;

    card_body_text = document.createElement("p");
    card_body_text.classList.add("card-text");
    card_body_text.innerHTML = document.getElementById("description_wish").value;
    //defining the button
    card_body_button = document.createElement("button");
    card_body_button.classList.add("btn");
    card_body_button.classList.add("btn-danger");
    card_body_button.classList.add("btn-sm");
    card_body_button.classList.add("d-xl-flex");
    card_body_button.classList.add("justify-content-xl-center");
    card_body_button.id = "delete_button";
    card_body_button.type = "button";
    card_body_button.style.textAlign = "right";
    card_body_button.innerHTML = "Delete";

    // adding attributes to the list
    div_card_body.appendChild(card_body_title);
    div_card_body.appendChild(card_body_subtitle);
    div_card_body.appendChild(card_body_text);
    div_card_body.appendChild(card_body_button);
    

    return li;
};


document.getElementById('add').onclick = function () 
{
    
    var parent = this.parentNode;
    var addTextInput = parent.children[1];
    var ul = document.getElementById("list");
    var templi = createBudget();
    ul.appendChild(templi);
    addTextInput.value = "";

};

document.getElementsByClassName('btn').onclick = function () 
{
    if(this.id == "delete_button")
    {
        var todoLi = this.parentNode.parentNode.parentNode;
        todoLi.remove();
        console.log("sda"); 
    }
    console.log("sda");    
};