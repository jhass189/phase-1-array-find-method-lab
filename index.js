// code your solution here
function superbowlWin(win) {
    let result = win.find((obj) => obj.result == "W")
    console.log(result)
    if (result) {
        return result.year

    }
}
