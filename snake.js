export const Snake_Speed = 1
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }]

export function update() {
    // for (let i = snakeBody.length - 2; i >= 0; i--) {
    //   snakeBody[i + 1 = { ...snakeBody[i] }]
    console.log('update snake')
}



export function draw(gameBoard) {
    console.log('draw snake')
    //snakeBody.forEach(segments => {
    //  const snakeElement = document.createElement('div')
    // snakeElement.style.gridRowStart = segment.x
    // snakeElement.style.gridColumnStart = segment.y
    // snakeElement.classList.add('snake')
    // gameBoard.appendChild(snakeElement)
    // })

}