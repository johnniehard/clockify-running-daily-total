const hmsToSeconds = (hmsString) => {
    const hms = hmsString.split(":").map(d => +d)
    let seconds = hms[2]
    seconds += hms[0] * 60 * 60
    seconds += hms[1] * 60
    return seconds
}

const pad = num => String(num).padStart(2, '0')

const secondsToHms = (seconds) => {
    const h = Math.floor(seconds / 60 / 60)
    const m = Math.floor(seconds / 60) - (h * 60)
    const s = Math.floor(seconds % 60)
    return `${pad(h)}:${pad(m)}:${pad(s)}`
}

const loggedTotalElement = document.querySelector("entry-group.ng-star-inserted:nth-child(1) > div:nth-child(2) > entry-group-header:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
const runningTimerElement = document.querySelector("span.cl-form-control")

const runningTotalElement = document.createElement('div')
runningTotalElement.setAttribute('class', 'cl-h2 cl-mb-0 cl-ml-2 cl-lh-1')
loggedTotalElement.parentElement.prepend(runningTotalElement)

setInterval(() => {
    const logged = hmsToSeconds(loggedTotalElement.innerHTML)
    const running = hmsToSeconds(runningTimerElement.innerHTML)
    const runningTotal = secondsToHms(logged + running)
    runningTotalElement.innerHTML = runningTotal
}, 1000)


module.exports = {
    hmsToSeconds,
    secondsToHms,
}