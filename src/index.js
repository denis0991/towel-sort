
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined || matrix.length == 0) {
    return []
  }
  let res = matrix.map(function(item, index, matrix) {
      if (index % 2 == 1 ) {
         return matrix[index].reverse()
         } else {
          return matrix[index]
         }
         
  })
  
  return result.concat(...res)
}
