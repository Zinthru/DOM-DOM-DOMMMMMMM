document.addEventListener('DOMContentLoaded', function(){
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square!')
    
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id=0;
    
    button.addEventListener('click',function(){
    id+=1;
    let div = document.createElement('newDiv');
    div.id="id";
    div.className="divButton";
    let divText = document.createTextNode(id);
    let p = document.createElement('p');
    p.appendChild(divText);
    div.appendChild(p);
    document.body.appendChild(div);
    p.style.opacity = "0";

    
    
    div.addEventListener("mouseover", function(){
        p.style.opacity="1";  
      })

    div.addEventListener("mouseleave",function(){
        p.style.opacity="0";
    })

    div.addEventListener('click', function(){
        let colors =["blue","red","green","yellow"];
        let num=Math.floor(Math.random*colors.length)
        
        div.style.backgroundColor=colors;
        // Need assistance
    })
    
    div.addEventListener('dblclick', function(){
        if(div.id % 2===0) {
            parseInt(div.id)+=1;
            div.parentNode.removeChild(div);
        } else if(div==null) {
            alert("Black square is not here!");
        }

    })
    })


    

    
    
})