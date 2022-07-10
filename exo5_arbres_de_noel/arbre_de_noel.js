/////////////////1)

function create_star(n) {
  let star = ""
  let i = 0
   while (i < n) {
    star += "*"
    i++
   }
   return star
}

function sapin2(n) {
  let arr = ["+","/*\\"]
  for(let i=1; i < n; i++) {
    let floor = "/"
    + create_star(i)
    +"\\"
    console.log(floor)
  }
}
sapin2(8)
