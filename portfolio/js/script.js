VanillaTilt.init(document.querySelectorAll(".competence"), {
    scale: 1.05,
    speed: 1500
});

VanillaTilt.init(document.querySelectorAll(".competence"));

window.addEventListener('scroll', reveal);

/*
let form = document.querySelector('form');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('php/contact.php', {
        method: 'POST',
        body: new FormData(form)
    });
  
    let result = await response.json();
}
*/


function reveal()
{
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint)
        {
            reveals[i].classList.add('active');
        }
    }
}