let hack = document.getElementById('hack')

let url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

// for
async function loop (){
  let response = await fetch(url)
  let json = await response.json()


  for(let index = 0; index<json.length;index++) {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${json[index]}.json?print=pretty`)
    let results = await response.json()
    x = results.time

    let liItem = `<div>
          <li><a href="${results.url}">${results.title}</a></li>
          <li>${results.by}  - ${new Date (results.time)}) </li>
          </div>`


    hack.insertAdjacentHTML("beforeend", liItem);

  }

}

loop()
