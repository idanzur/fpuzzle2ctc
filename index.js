redirect = () => {
    const ctcBase = 'https://app.crackingthecryptic.com/sudoku/?puzzleid=fpuzzles'
    const loadParam = document.querySelector("input").value.split('?load=')[1]
    const fpuzzleData = encodeURIComponent(loadParam)
    window.location = `${ctcBase}${fpuzzleData}`
}