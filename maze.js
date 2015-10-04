var lose = false;

window.onload = function()
{
    $("start").onclick = Start;
    $("end").onmouseover = End;
    var anyBoundary = $$("div#maze div.boundary");
    for(var index = 0; index < anyBoundary.length; index++)
    {
        anyBoundary[index].onmouseover = outOfBounds;
    }
    
}

function outOfBounds()
{
    lose = true;
    var anyBoundary = $$("div#maze div.boundary");
    for (var o = 0; o < anyBoundary.length; o++)
    {
        anyBoundary[o].addClassName("youlose");
    }
}

function Start()
{
    lose = false;
    var anyBoundary = $$("div#maze div.boundary");
    for (var s = 0; s < anyBoundary.length; s++)
    {
        anyBoundary[s].removeClassName("youlose");
    }
}

function End()
{
    if (lose == false)
    {
        alert("You win! :]");
    }
}
