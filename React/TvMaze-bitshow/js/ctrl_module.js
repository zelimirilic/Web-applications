import * as dataModule from "./data_module.js";
import * as uiModule from "./ui_module.js";

function loadPage() {
    const request = $.get(dataModule.showAll.url).done(response => {
        // console.log(response)
        const shows = dataModule.createShows(response);
        uiModule.landingPageShows(shows);
    });
    request.fail(() => {
        alert("Your request failed.");
    });
}

const searchInput = $(".form-control");
searchInput.on("keyup", searchShowTrigger);

function searchShowTrigger(event) {
    let urlSearch = dataModule.showAll.urlSearch;
    let searchVal = searchInput.val();
    let searchShowName = `${urlSearch}${searchVal}`;

    if (searchInput.val().length < 3) {
        return;
    }

    let requestSearch = $.get(searchShowName).done(response => {
        let list = dataModule.searchShow(response);
        uiModule.appendListShows(list);
    })
}

$(document).on("click", ".single-show", function () {
    const currentID = this.getAttribute("data-id");
    dataModule.addToStorage("showID", currentID);
    window.location.href = './show.html';
});

export {
    loadPage
}
