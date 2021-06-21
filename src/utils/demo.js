// 用最精炼的代码实现数组非零非负最小值 index
// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
function getIndex(arr) {
  const index = null;
  const newArr = arr.filter((item, index) => {
    return item > 0;
  });
  const myArr = [];
  for (let i = 0; i < newArr.length; i++) {}
  console.log(arr, newArr);
  return index;
}
const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];
getIndex(arr);
