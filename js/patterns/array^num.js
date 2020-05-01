// 
// arr^num
// 上記の全てのパターンを取得する関数
//  

const test_arr = ["a", "b", "c", "d", "e"]

const get_allCombPattern = (arr, num) => {
  let pts = []
  for (i = 0; i < num; i++) {
    if (i === 0) {
      pts = arr.map(e => [e])
      continue
    }
    const old_pts = [...pts]
    pts = []
    for (pt of old_pts) {
      for (e of arr) {
        pts.push(pt.concat([e]))
      }
    }
  }
  return pts
}




const main = async () => {
  const result = await get_allCombPattern(test_arr, 5)
  console.log(JSON.stringify(result, null, 2))
  console.log(JSON.stringify(result.length, null, 2))
}

console.log("start")
main().then(() => {
  console.log("end")
}).catch((err) => {
  console.log("!!!!!!! error !!!!!!!!")
  console.log(err)
});
