const secondHand = document.querySelector(".jarum__detik");
const minuteHand = document.querySelector(".jarum__menit");
const hourHand = document.querySelector(".jarum__jam");

const setDate = () => {
    const now = new Date();

    // Set second
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    if (secondDegree === 90) {
        secondHand.style.transition = "none";
    } else if (secondDegree >= 91) {
        secondHand.style.transition = "all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }

    // Set minute
    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    // Set hour
    const hour =  now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);