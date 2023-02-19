import { update as updateSnake, draw as drawSnake, Snake_Speed } from './snake.js'


let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) return

    console.log("hello world")


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()



}

function draw() {
    drawSnake(gameBoard)

}