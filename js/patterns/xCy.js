// 
// xCy
// 上記の全てのパターンを取得する関数
//  

const test_arr = ["a", "b", "c", "d", "e"]

const get_xCyPattern = (arr, num) => {
  let pts = []
  for (i = 0; i < num; i++) {
    if (i === 0) {
      pts = arr.map(e => [e])
      continue
    }
    const old_pts = [...pts]
    pts = []
    for (pt of old_pts) {
      const filter_arr = arr.filter(e => !pt.includes(e))
      for (e of filter_arr) {
        const new_pt = pt.concat([e]).sort()
        const new_pt_str = pt.concat([e]).sort().join("")
        const pts_strs = pts.map(e => e.sort().join(""))
        if (!pts_strs.includes(new_pt_str)) pts.push(new_pt)
      }
    }
  }
  return pts
}




const main = async () => {
  const result = await get_xCyPattern(test_arr, 4)
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
