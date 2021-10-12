export const getGifts = async (category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=PCzWSStoztZlwezlctf0Ilfqv6hiWAr6&q=${ encodeURI(category) }&limit=10`;

    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifts = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        };
    });

    return gifts;
}