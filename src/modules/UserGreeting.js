export default class UserGreeting {
    constructor(domElement, { locale, user, datetimeFormat }) {
        this.render(domElement, locale, user, datetimeFormat);
    }

    render(domElement, locale, user, format) {
        const mom = moment();
        mom.locale(locale);

        const content = `Hello, ${user}! The current time is ${mom.format(format)}`;
        domElement.innerHTML = content;
    }
}
