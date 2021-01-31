const test = require('tape')
const {
    hmsToSeconds,
    secondsToHms
} = require('./index')

test('hmsToSeconds', t => {
    t.equal(hmsToSeconds("01:10:10"), 60 * 60 + 10 * 60 + 10)
    t.equal(hmsToSeconds("00:00:00"), 0)
    t.equal(hmsToSeconds("100:10:10"), 100 * 60 * 60 + 10 * 60 + 10)
    t.equal(hmsToSeconds("00:200:00"), 0 + 200 * 60 + 0)

    t.end()
})

test('secondsToHms', t => {
    t.equal(secondsToHms(60 * 60 + 10 * 60 + 10), "01:10:10")
    t.equal(secondsToHms(2 * 60 * 60 + 70 * 60 + 10), "03:10:10")
    t.equal(secondsToHms(10), "00:00:10")

    t.end()
})