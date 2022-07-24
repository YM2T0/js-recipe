const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-contaier")
//ボタンを押したら
addButton.onclick = function () {
  //divタグを作る
  const card = document.createElement("div")
  //card.className = "card" => <div class="card"><div/>
  //作ったdivタグの値をmemoInputの値(入力値)に変える
  card.textContent = memoInput.value
  //memoContainer(id=memo-container)の中に追加する
  memoContainer.append(card)
}
