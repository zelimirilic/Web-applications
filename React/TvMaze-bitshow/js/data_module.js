import Show from "./show.js";
import singleShow from "./singleShow.js";
import Cast from "./cast.js";
import Season from "./season.js";


const showAll = {
    url: "https://api.tvmaze.com/shows",
    urlSearch: "http://api.tvmaze.com/search/shows?q="
}

const createShows = shows => {
    let listOfShows = [];

    shows.forEach((element, index) => {
        if (element.rating.average > 7) {
            if (index < 50) {
                listOfShows.push(new Show(element.id, element.name, element.image.medium));
            }
        }
    });

    return listOfShows
}

const searchShow = showList => {
    let show10 = [];

    showList.forEach(({
        show
    }, index) => {
        if (index < 10) {
            let showName = new Show(show.id, show.name);
            show10.push(showName);
        }
    })

    return show10
}

const addToStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const getSingleShowID = (key) => {
    return localStorage.getItem(key);
}


const createSingleShow = show => {
    const currentShow = new singleShow("", show.name, show.image, show.summary);
    return currentShow
}


const createCast = cast => {
    let castList = [];

    cast.forEach((element, index) => {
        castList.push(new Cast(element.person));
    });

    return castList
}

const createSeason = seasons => {
    const seasonsList = [];

    seasons.forEach(season => {
        seasonsList.push(new Season(season.premiereDate, season.endDate));
    })

    return seasonsList;
}

export {
    createShows,
    showAll,
    searchShow,
    addToStorage,
    getSingleShowID,
    createSingleShow,
    createCast,
    createSeason
};