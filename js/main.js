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
        label: "CV website",
        url: "https://adamnielsen.dev/"
    }
]


function makeList(contents) {
    contentsList = document.getElementById("contentsList");
    // remove each element in list
    while(contentsList.firstChild) contentsList.removeChild(contentsList.firstChild);
    // add each element in contents to list
    for (i=0; i < contents.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = "<a href='" + contents[i]["url"] + "'>" + contents[i]["label"] + "</a>";
        contentsList.appendChild(listItem);
    }
}