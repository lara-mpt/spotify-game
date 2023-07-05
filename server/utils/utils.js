const getRandomSearch = () => {
    const characters = 'abcdefghijklmnopqrstuvwxy';
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    return randomCharacter + '%';
}

const getRandomOffset = (maxOffset) => {
    return Math.floor(Math.random() * maxOffset);
}

module.exports = {
    getRandomSearch,
    getRandomOffset,
};
