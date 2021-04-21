export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=130w2WFTFJqZhC7IcC9VDpNEzWqQh9Ku`;

    const response = await fetch(url);
    
    const {data} = await response.json();

    const gifs = data.map(({id, title, images}) => (
        
        {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
        
    ));

    return gifs;
}