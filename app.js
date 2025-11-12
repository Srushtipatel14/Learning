

const memoize = (val) => {
  const res = {};
  return function (...x) {
    if (res[x]) {
      console.log("value is get from cache", res[x]);
      return
    }

    const result =val(...x);
    res[x] = result;
    console.log("value is get through calculation", result);
    return
  }
}
const val=memoize((a,b)=>a*b)

val(4, 5)
val(4, 5)