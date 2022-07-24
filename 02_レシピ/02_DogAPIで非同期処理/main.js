const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((JSON) => {
    imageElement.src = JSON[0].url // 画像を表示する
  })

/*[{"breeds":[],"id":"cf8","url":"https://cdn2.thecatapi.com/images/cf8.jpg","width":538,"height":720}]
  より、リストに入ってるので[0]の.urlで猫の写真入手*/
