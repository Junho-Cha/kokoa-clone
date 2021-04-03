const clockContainer = document.querySelector(".rt-clock");
const clockTitle = clockContainer.querySelector("#rt-clock");
const timestamp = document.querySelector(".chat-timestamp");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;

    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dates = date.getDate();

    const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const today = new Date().getDay();
    const dayOfWeek = week[today];

    timestamp.innerText = `${year}년 ${month}월 ${dates}일 ${dayOfWeek}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();