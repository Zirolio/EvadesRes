// ==UserScript==
// @name              E-Zond-Beta
// @name:ru           E-Zond-Beta
// @namespace         http://tampermonkey.net/
// @version           11.2-beta
// @description       Well, this is the simplest script for Evades.io, in which there is nothing special, but there is a lot of interesting and useful things
// @description:ru    Ну, это самый простой скрипт для Evades.io, в котором нету ничего особенного, но есть много чего интересного и полезного
// @author            .zirolio.
// @license           CC-BY-NC-ND-4.0
// @icon              data:image/jpeg;base64,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
// @match             https://evades.io
// @run-at            document-start
// @grant             none
// @updateURL         https://raw.githubusercontent.com/Zirolio/E-Zond/main/e-zond/e-zond.meta.js
// @downloadURL       https://raw.githubusercontent.com/Zirolio/E-Zond/main/e-zond/e-zond.user.js
// ==/UserScript==

//                                                             .--------------------------------------------------------------------------------------------------------------------.
//                                                             | Так-же хотелось бы поблагодорить розработчиков за отличную игру/проект, надеюсь, скоро будет много новых персов :) |
//                                                             | И ещё, я передаю привет всем разработчикам Evades, ну и просто разработчикам :)                                    |
//                                                             | А просто читающим - жешаю хорошей игры!!!                                                                          |
//                                                             |--------------------------------------------------------------------------------------------------------------------|
//                                                             | I would also like to thank the developers for a great game/project, I hope there will be many new Persians soon :) |
//                                                             | And also, I say hello to all Evades developers, and just developers :)                                             |
//                                                             | And just reading - I want a good game!!!                                                                           |
//                                                             ^--------------------------------------------------------------------------------------------------------------------^

(async() => {
    eval(localStorage.getItem("e-zond-code") || await fetch(`https://raw.githubusercontent.com/Zirolio/E-Zond/main/e-zond/e-zond.user.js`).then(d => d.text()));
})();