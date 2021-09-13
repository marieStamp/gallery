import './style.sass';
import { renderItems } from './renderItems';
import { items } from './items';


const catalogueEl = document.querySelector('.catalogue');

renderItems(items, catalogueEl);





