const key = "websitevisit";

export default class WebsiteVisit {
    constructor(domElement) {
        const visits = parseInt(Cookies.get(key) || 0, 10) + 1;
        this.render(domElement, visits);
        Cookies.set(key, visits);
    }

    render(domElement, visits) {
        domElement.innerHTML = `Thank you for visiting our site! This is visit #${visits}`;
    }
}