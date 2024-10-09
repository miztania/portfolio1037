let postCount = 0 ;

window.onload = function(){
    targetElement = document.getElementById('top');
    targetElement.innerText = 'Welcome to the Forum';

    targetElement = document.getElementById('topic');
    targetElement.innerText = 'text';

    targetElement = document.getElementById('reply1');
    targetElement.innerText = 'text';

    targetElement = document.getElementById('reply2');
    targetElement.innerText = 'text';
}

function postFunction(){
    const message = document.getElementById('message').value;

    if(postCount == 0){
        targetElement = document.getElementById('topic');
        targetElement.innerText = message;
        targetElement.style.color = 'black';
    } else if(postCount == 1){
        targetElement = document.getElementById('reply1');
        targetElement.innerText = message;
        targetElement.style.color = 'black';
    } else if (postCount == 2){
        targetElement = document.getElementById('reply2');
        targetElement.innerText = message;
        targetElement.style.color = 'black';
    }

    postCount++;

    //clear text area

    document.getElementById('message').value = '';
}



function clearFunction(){
    //clear 
    targetElement = document.getElementById('topic');
    targetElement.innerText = 'text';
    targetElement.style.color = '#c5c5c5';

    targetElement = document.getElementById('reply1');
    targetElement.innerText = 'text';
    targetElement.style.color = '#c5c5c5';


    targetElement = document.getElementById('reply2');
    targetElement.innerText = 'text';
    targetElement.style.color = '#c5c5c5';

    //set post count 
    postCount = 0;

    //clear text area

    document.getElementById('message').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialization or setup code can go here if needed
});

