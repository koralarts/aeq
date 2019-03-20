const head = (arr = []) => arr ? [...arr].shift() : null

const getNextGrounds = (currentGround, grounds) => {
  let numSameGrounds = 1

  while(currentGround === grounds[numSameGrounds]) {
    numSameGrounds += 1
  }

  return [...grounds].slice(numSameGrounds)
}

const constructCastles = (grounds, oldGround, numCastles = 0) => {
  if (!Array.isArray(grounds) || !grounds.length) {
    return  numCastles
  }

  if(grounds.length < 3) {
    return 1;
  }

  const [currentGround, ...restGrounds] = grounds
  const nextGrounds = getNextGrounds(currentGround, restGrounds)
  const nextGround = head(nextGrounds)

  if (
    !oldGround ||
    oldGround > currentGround && nextGround > currentGround ||
    oldGround < currentGround && nextGround < currentGround
  ) {
    return constructCastles(nextGrounds, currentGround, numCastles + 1)
  }

  return constructCastles(nextGrounds, currentGround, numCastles)
}

module.exports = constructCastles
