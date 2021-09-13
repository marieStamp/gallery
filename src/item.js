
export function getItemMarkup(item) {
    if (item.type === 'image') {
    return `
        <div class="catalogue__item">
            <img class="item__photo" src=${item.resourse}>
                    <p class="item__name">${item.title}</p>
        </div>
    `
    } else if (item.type === 'audio') {
        return `
        <div class="catalogue__item">
            <div class="audioWrap">
                <audio src=${item.resourse} class="item__audio" controls>   
                </audio>
            </div>
            <p class="item__name">${item.title}</p>
        </div>
    `
    } else if (item.type === 'video') {
        return `
        <div class="catalogue__item">
                <video src=${item.resourse} class="item__video" controls>
                </video>
           
            <p class="item__name">${item.title}</p>
        </div>
    `
    }

}

