import Show from '../entities/Show'

class ShowFetcher {
    getData() {
        return fetch('https://api.tvmaze.com/shows')
            .then(result => {
                return result.json();
            })
            .then(shows => {
                console.log(shows);
                
                return shows.map(show => {
                    return new Show(show.id, show.name, show.image.medium, show.summary)
                })
        })
    }
}

export const showFetcher = new ShowFetcher();