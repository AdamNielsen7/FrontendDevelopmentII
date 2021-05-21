const contents = [
    {
        label: "Week1 notes",
        url: "week1/"
    },
    {
        label: "Week2 notes",
        url: "week2/"
    },
    {
        label: "Week3 notes",
        url: "week3/"
    },
    {
        label: "Week4 notes",
        url: "week4/"
    },
    {
        label: "Week5 notes",
        url: "week5/"
    }
]


function makeList(contents) {
    contentsList = document.getElementById("contentsList");
    // remove each element in list
    while(contentsList.firstChild) contentsList.removeChild(contentsList.firstChild);
    // add each element in contents to list
    for (i=0; i < contents.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = "<a href='" + contents[i]["url"] + "'><span>" + contents[i]["label"] + "</span></a>";
        contentsList.appendChild(listItem);
    }
}