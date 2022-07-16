/*1：要素の入手*/
//入力欄(文字の入力)
const inputElement = document.getElementById("input-todo")
//入力データの保存場所
const container = document.getElementById("cards-container")
//追加ボタン
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButtom = document.createElement("div")
  deleteButtom.className = "delete"

  deleteButtom.onclick = function () {
    card.remove()
  }
  card.append(deleteButtom)

  return card
}
