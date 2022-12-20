function test(){
    let seconds = new Date().getSeconds() * 6 + 6;
    document.getElementById("hours").style.transform = `rotate(${new Date().getHours() * 30 + new Date().getMinutes() / 2}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${(new Date().getMinutes() * 6 + new Date().getSeconds() * 0.1)}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${seconds}deg)`;
    seconds += 6;
    setInterval(() => {
        let date = new Date();
        document.getElementById("hours").style.transform = `rotate(${date.getHours() * 30 + date.getMinutes() / 2}deg)`;
        document.getElementById("minutes").style.transform = `rotate(${(date.getMinutes() * 6 + date.getSeconds() * 0.1)}deg)`;
        document.getElementById("seconds").style.transform = `rotate(${seconds}deg)`;
        seconds += 6;
    }, 1000);
}
test()