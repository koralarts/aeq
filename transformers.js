class Transformer {
  constructor([
    name,
    alignment,
    strength,
    intelligence,
    speed,
    endurance,
    rank,
    courage,
    firepower,
    skill
  ]) {
    this.name = name.trim()
    this.alignment = alignment
    this.strength = strength
    this.intelligence = intelligence
    this.speed = speed
    this.endurance = endurance
    this.rank = rank,
    this.courage = courage
    this.firepower = firepower
    this.skill = skill
    this.alive = true
  }

  get overall() {
    return (
      this.strength +
      this.intelligence +
      this.speed +
      this.endurance +
      this.firepower
    )
  }

  get isOP() {
    const opFighters = ['optimus prime', 'predaking']
    return opFighters.includes(this.name.toLowerCase())
  }
}

class Alignment {
  constructor(name) {
    this.name = name
    this._members = []
    this._sortedMembers = null
  }

  addMember(member) {
    this._sortedMembers = null
    this._members.push(member)
  }

  member(index) {
    return this.members[index]
  }

  get members() {
    if (!this._sortedMembers) {
      this._sortedMembers = [...this._members]
      this._sortedMembers.sort((x, y) => x - y)
    }
    return this._sortedMembers
  }

  get numDeadMembers() {
    return this.members.filter(({ alive }) => !alive).length
  }

  get numSurvivingMembers() {
    return this.members.filter(({ alive }) => alive).length
  }

  get numMembers() {
    return this.members.length
  }

  get listSurvivors() {
    return this.members
      .reduce((accum, { alive, name }) =>
        (alive ? [...accum, name] : accum),
      [])
      .join(', ')
  }
}

class BattleSimulator {
  constructor(input) {
    this.autobots = new Alignment('Autobots')
    this.decepticons = new Alignment('Decepticons')
    this.init(input)
  }

  get numBattles() {
    return Math.min(this.autobots.numMembers, this.decepticons.numMembers)
  }

  init(input) {
    if (!input) {
      return
    }

    input.trim().split('\n')
      .forEach(player => {
        if (!player) {
          return
        }

        const stats = player.split(',')
        const transformer = new Transformer(stats)

        if (transformer.alignment === 'A') {
          this.autobots.addMember(transformer)
        } else {
          this.decepticons.addMember(transformer)
        }
      })
  }

  calcFightingSpirit(robot1, robot2) {
    return (
      robot1.strength - robot2.strength >= 4 &&
      robot1.endurance - robot2.endurance >= 3
    )
  }

  fight(autobot, decepticon) {
    if (autobot.isOP && decepticon.isOP) {
      return null
    }

    if (autobot.isOP) {
      return decepticon
    }

    if (decepticon.isOP) {
      return autobot
    }

    if (this.calcFightingSpirit(autobot, decepticon)) {
      return decepticon
    }

    if (this.calcFightingSpirit(decepticon, autobot)) {
      return autobot
    }

    if (autobot.skill - decepticon.skill >= 3) {
      return decepticon
    }

    if (decepticon.skill - autobot.skill >= 3) {
      return autobot
    }

    if (autobot.overall > decepticon.overall) {
      return decepticon
    }

    if (decepticon.overall > autobot.overall) {
      return autobot
    }

    return null
  }

  startBattle() {
    const battles = this.numBattles

    for(let i = 0; i < battles; i++) {
      const autobot = this.autobots.member(i)
      const decepticon = this.decepticons.member(i)
      const loser = this.fight(autobot, decepticon)

      if(!loser) {
        autobot.alive = false
        decepticon.alive = false
      } else {
        loser.alive = false
      }
    }

    return this.renderResults()
  }

  determineWinner() {
    return [this.autobots, this.decepticons]
      .sort((a, d) => (a.numDeadMembers !== d.numDeadMembers
        ? a.numDeadMembers - d.numDeadMembers
        : d.numSurvivingMembers - a.numSurvivingMembers
      ))
  }

  renderResults() {
    const [winner, loser] = this.determineWinner()

    return `${this.numBattles} battles
Winning Team (${winner.name}): ${winner.listSurvivors}
Survivors from losing team (${loser.name}): ${loser.listSurvivors}`
  }
}

const transformersBattleSimulator = (input) => {
  const simulator = new BattleSimulator(input)

  return simulator.startBattle()
}

module.exports = transformersBattleSimulator

