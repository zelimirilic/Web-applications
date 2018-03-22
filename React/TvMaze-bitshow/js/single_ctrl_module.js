import * as dataModule from "./data_module.js";
import * as uiModule from "./ui_module.js";


const initialLoad = () => {
    const singleID = dataModule.getSingleShowID("showID");
    displaySingleShow(parseInt(singleID));
}

const displaySingleShow = (id) => {
    $.get(`${dataModule.showAll.url}/${id}`).done(function (response) {
        const currentShow = dataModule.createSingleShow(response);
        uiModule.appendSingleShow(currentShow);
    })
    $.get(`${dataModule.showAll.url}/${id}/cast`).done(function (response) {
        const currentCrew = dataModule.createCast(response);
        uiModule.appendCast(currentCrew);
    });
    $.get(`${dataModule.showAll.url}/${id}/seasons`).done(function (response) {
        const currentSeason = dataModule.createSeason(response);
        uiModule.appendSeason(currentSeason);
    });
}

export {
    initialLoad
}