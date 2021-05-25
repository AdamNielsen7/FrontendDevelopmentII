const contents = [
    {
        label: "Week 1 - Basics & LocalStorage",
        url: "week1/"
    },
    {
        label: "Week 2 - Types & Functions",
        url: "week2/"
    },
    {
        label: "Week 3 - Objects & Events",
        url: "week3/"
    },
    {
        label: "Week 4 - OOP, Forms, & Modular JavaScript",
        url: "week4/"
    },
    {
        label: "Week 5 - Testing & Debugging",
        url: "week5/"
    },
    {
        label: "Week 6 - Midterm TODO Application",
        url: "todolist/"
    }
]


function makeList(contents) {
    contentsList = document.getElementById("contentsList");
    // remove each element in list
    while(contentsList.firstChild) contentsList.removeChild(contentsList.firstChild);
    // add each element in contents to list
    for (i=0; i < contents.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = "<a href='" + contents[i]["url"] + "'><span class='hover:underline'>" + contents[i]["label"] + "</span></a>";
        contentsList.appendChild(listItem);
    }
}