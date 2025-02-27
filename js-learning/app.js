function createHTMLElement(tag, text, src, id) {
    const element = document.createElement(tag);
    element.innerText = text;
    if(length.id) {
        element.id = id;
    }
    element.createLink = src;
    return element;
}

const h1Element = createHTMLElement('h1', 'header1', 'просто текст');
const sumText = createHTMLElement('p', 'p1', 'some text');


document.body.append(h1Element);
document.body.append(sumText);

function createLink(domain) {
    let link = 'https://www.' + domain + '.com';
    return link;

}

let vk = createLink('vk');
createHTMLElement('a', 'VK', vk, 'smth');