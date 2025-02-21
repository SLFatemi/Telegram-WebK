// let erfanChat = document.querySelector('.--erfan')
// let sinaChat = document.querySelector('.--sina')
// let mahdiyarChat = document.querySelector('.--mahdiyar')
// let openedChatErfan = document.querySelector('.--user-erfan')
// let openedChatSina = document.querySelector('.--user-sina')
// let openedChatMahdiyar = document.querySelector('.--user-mahdiyar')
//
// erfanChat.addEventListener('click', function () {
//     openedChatErfan.classList.toggle('--closed')
//     erfanChat.classList.toggle('--close')
//     openedChatSina.classList.add('--closed')
//     sinaChat.classList.add('--close')
//     openedChatMahdiyar.classList.add('--closed')
//     mahdiyarChat.classList.add('--close')
// })
// sinaChat.addEventListener('click', function () {
//     openedChatSina.classList.toggle('--closed')
//     sinaChat.classList.toggle('--close')
//     openedChatErfan.classList.add('--closed')
//     erfanChat.classList.add('--close')
//     openedChatMahdiyar.classList.add('--closed')
//     mahdiyarChat.classList.add('--close')
// })
// mahdiyarChat.addEventListener('click', function () {
//     openedChatMahdiyar.classList.toggle('--closed')
//     mahdiyarChat.classList.toggle('--close')
//     openedChatErfan.classList.add('--closed')
//     erfanChat.classList.add('--close')
//     openedChatSina.classList.add('--closed')
//     sinaChat.classList.add('--close')
// })
let darkModeButton = document.querySelector('.chats-header-main-darkMode');
darkModeButton.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('dark')
})
document.addEventListener("DOMContentLoaded", function () {
    let users = ["erfan", "sina", "mahdiyar", "mohammadreza"]; // Add more names if needed

    let chatButtons = users.map(user => document.querySelector(`.--${user}`));
    let chatWindows = users.map(user => document.querySelector(`.--user-${user}`));

    chatButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            chatWindows.forEach((chat, chatIndex) => {
                if (index === chatIndex) {
                    chat.classList.toggle("--closed");
                    chatButtons[chatIndex].classList.toggle("--open");
                } else {
                    chat.classList.add("--closed");
                    chatButtons[chatIndex].classList.remove("--open");
                }
            });
        });
    });
});

