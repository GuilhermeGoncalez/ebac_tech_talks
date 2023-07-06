AOS.init();

const dateEvent = new Date("Oct 10, 2023 19:00:00");
const timeStampEvent = dateEvent.getTime();

const countDate = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceToEvent = timeStampEvent - timeStampCurrent;
    
    const dayinMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minInMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceToEvent / dayinMs);
    const hoursToEvent = Math.floor((distanceToEvent % dayinMs) / hoursInMs);
    const minutesToEvent = Math.floor((distanceToEvent % hoursInMs) / minInMs);
    const SegsToEvent = Math.floor((distanceToEvent % minInMs) / 1000)


    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minutesToEvent);
    console.log(SegsToEvent);
    
    document.getElementById('contador').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${SegsToEvent}s`;
    if (distanceToEvent < 0) {
        clearInterval(countDate);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);