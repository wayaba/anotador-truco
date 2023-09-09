export const getPoints = () => {
  let pointsLocal = { we: 0, they: 0 }
  const storedPoints = localStorage.getItem('trucoMatchPoints')
  if (storedPoints !== null) {
    pointsLocal = JSON.parse(storedPoints)
  }
  return pointsLocal
}

export const updatePoints = (newValue) => {
  localStorage.setItem('trucoMatchPoints', JSON.stringify(newValue))
}
