import { getItemMarkup } from "./item";

export function renderItems(items, catalogueEl) {
    let itemsMarkup = '';
    for (let item of items) {
        itemsMarkup += getItemMarkup(item);
    }
    catalogueEl.insertAdjacentHTML('afterbegin', itemsMarkup);
}

