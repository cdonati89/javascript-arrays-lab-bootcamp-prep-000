const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten);
}
function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten);
}
