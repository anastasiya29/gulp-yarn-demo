import UserGreeting from './modules/UserGreeting.js';
import WebsiteVisit from './modules/WebsiteVisit.js';

const modules = {
    UserGreeting: UserGreeting,
    WebsiteVisit: WebsiteVisit
};

$("[data-module]").each(function () {
    const $moduleElement = $(this),
        data = $moduleElement.data(),
        moduleName = data.module;

    if (typeof modules[moduleName] === 'function') {
        var module = new modules[moduleName](this, data);
    }
});