export const getRandom = (elemets) => {
  const randomIndex = Math.floor(Math.random() * elemets.length)
  return elemets[randomIndex]

}
