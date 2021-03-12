let timeStarted;

export default {
    getElapsedTime: () => Date.now() - timeStarted,
    setStartTime: () => timeStarted = Date.now()
}
