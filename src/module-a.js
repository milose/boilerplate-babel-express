// eslint-disable-next-line no-console
console.log('module-a.js: File was imported')

let one = function() {
  //
}
one()

let two = () => {}
two()

function three() {}
three()

export default {
  test() {
    // eslint-disable-next-line no-console
    console.log('module-a.js: test() function was called')
  },
  test2: function() {
    //
  }
}
