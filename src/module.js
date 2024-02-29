

export function createList(fish, language) {
    if (!document.querySelector(`#list-${fish.map}`)) {


        const listContainer = document.createElement("div");
        listContainer.setAttribute("class", "list-container hidden-list");
        listContainer.setAttribute("id", `list-${fish.map}`);
        document.querySelector("#fish-list").appendChild(listContainer);

        const listTitle = document.createElement("div");
        listTitle.setAttribute("class", "is-flex my-2 is-align-items-center list-title");
        listContainer.appendChild(listTitle);


        const xhr = new XMLHttpRequest();
        const url = `images/${fish.map}.svg`;
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "image/svg+xml");
        xhr.onload = function () {
            if (xhr.status === 200) {
                const svgElement = xhr.responseXML.documentElement;
                listTitle.appendChild(svgElement);
            }
        };
        xhr.send();


        const iconArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconArrow.setAttribute("class", "icon-arrow");
        iconArrow.setAttribute("width", "24");
        iconArrow.setAttribute("height", "24");
        iconArrow.setAttribute("viewBox", "0 0 24 24");
        listTitle.appendChild(iconArrow);

        const pathArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathArrow.setAttribute("fill", "currentColor");
        pathArrow.setAttribute("d", "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z");
        iconArrow.appendChild(pathArrow);

        const titleText = document.createElement("span")
        titleText.innerHTML = fish.map;
        listTitle.appendChild(titleText)


        const innerList = document.createElement("div");
        innerList.setAttribute("class", "inner-list");
        listContainer.appendChild(innerList);

    }


    const item = document.createElement("div");
    item.setAttribute("class", `item is-flex is-align-items-center py-1 px-4 map-${fish.map} ${fish.type}`);
    item.setAttribute("data-id", fish.id);
    item.setAttribute("data-season", fish.seasons[new Date().getMonth()] ? "in" : "out")
    if(fish.inprogress){
        item.setAttribute("style", "pointer-events:none;background-color: #191919;color: #853535;");
    }
    const figure = document.createElement("figure");
    figure.setAttribute("class", "image is-24x24 mr-3");
    item.appendChild(figure);
    const img = document.createElement("img");
    img.setAttribute("src", `./images/${fish.id}.png`);
    img.setAttribute("class", "is-rounded");
    figure.appendChild(img);
    const p = document.createElement("p");
    p.setAttribute("class", "is-size-6 fishp");
    p.innerHTML = fish.name[language] ? fish.name[language] : fish.name.en;
    item.appendChild(p)
    



    document.querySelector(`#list-${fish.map} .inner-list`).appendChild(item);


}