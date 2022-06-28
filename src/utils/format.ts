export const calculateTime = (value) => {
    const seconds = +((value % 60000) / 1000).toFixed(0);
    const minutes = Math.floor(value / 60000);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " min";
};
