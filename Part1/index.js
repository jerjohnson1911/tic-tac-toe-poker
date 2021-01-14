// console.log('hello, there')
const board = []


function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
      playerSpan.innerText = 'X'
      clickedElement.innerText = 'O'
      board[clickedId] = 'O'
    }
    console.log(clickedId)

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if(topLeft !== undefined && topLeft === topCenter && topRight){
        // alert(board[topLeft] + 'is the winner!')
        alert(`${topLeft} is the winner`)
        return
    }

    if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        // alert(board[middleLeft] + 'is the winner!')
        alert(`${middleLeft} is the winner`)
        return
    }

    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        // alert(board[bottomLeft] + 'is the winner!')
        alert(`${bottomLeft} is the winner`)
        return
    }

    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        // alert(board[topLeft] + 'is the winner!')
        alert(`${topLeft} is the winner`)
        return
    } 

    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        // alert(board[topCenter] + 'is the winner!')
        alert(`${topCenter} is the winner`)
        return
    }

    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        // alert(board[topRight] + 'is the winner!')
        alert(`${topRight} is the winner`)
        return
    }

    if(topLeft !== undefined && topLeft === middleCenter && topLeft ===  bottomRight){
        // alert(board[topLeft] + 'is the winner!')
        alert(`${topLeft} is the winner`)
        return
    }

    if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        // alert(board[topRight] + 'is the winner!')
        alert(`${topRight} is the winner`)
        return
    }

    let boardFull = true
    for(i = 0; i <=8; i++){
        if(board[i] === undefined){
            boardFull = false
        }
      }
      if(boardFull === true){
          alert(`Cat's game, nobody wins! haha!!!`)
      }
}




// function reset(board){
//    for (let i = 0; i < arr.length; i++) {
//        if(arr[i] === true){
//            arr[i] = ''
//        }
       
//    }
// } 


function reset(_board){
    const blank = document.getElementsByName('td')

    blank = undefined

}