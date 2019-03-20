const transformersBattleSimulator = require('../transformers')
const assert = require('assert')

describe('Transformers', () => {
  describe('#1: Invalid Input', () => {
    it('should handle empty input', () => {
      assert.equal(transformersBattleSimulator(), 
      `0 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
    it('should handle empty string', () => {
      assert.equal(transformersBattleSimulator(''), 
      `0 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
    it('should handle empty string multiline string', () => {
      assert.equal(transformersBattleSimulator(`



      `), `0 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
  })
  describe('#2: Valid Input', () => {
    it('should handle OP robots', () => {
      assert.equal(transformersBattleSimulator(`
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
      `), `1 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
    it('should handle one-sided OP robot (Autobot)', () => {
      assert.equal(transformersBattleSimulator(`
        Soundwave,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
      `), `1 battles
Winning Team (Autobots): Optimus Prime
Survivors from losing team (Decepticons): `
      )
    })
    it('should handle one-sided OP robot (Decepticon)', () => {
      assert.equal(transformersBattleSimulator(`
        Predaking,D,8,9,2,6,7,5,6,10
        Bumblebee,A,6,6,7,9,5,2,9,7
      `), `1 battles
Winning Team (Decepticons): Predaking
Survivors from losing team (Autobots): `
      )
    })
    it('should handle example input', () => {
      assert.equal(transformersBattleSimulator(`
        Soundwave,D,8,9,2,6,7,5,6,10
        Bluestreak,A,6,6,7,9,5,2,9,7
        Hubcap,A,4,4,4,4,4,4,4,4
      `), `1 battles
Winning Team (Decepticons): Soundwave
Survivors from losing team (Autobots): Hubcap`
      )
    })
    it('should handle equal number of competitor', () => {
      assert.equal(transformersBattleSimulator(`
        Soundwave,D,8,9,2,6,7,5,6,10
        Bluestreak,A,6,6,7,9,5,2,9,7
        Hubcap,A,4,4,4,4,4,4,4,4
        Buzzsaw,D,5,8,8,4,6,7,4,9
      `), `2 battles
Winning Team (Decepticons): Soundwave, Buzzsaw
Survivors from losing team (Autobots): `
      )
    })
    it('should handle one-sided fight (Autobot)', () => {
      assert.equal(transformersBattleSimulator(`
        Bluestreak,A,6,6,7,9,5,2,9,7
        Hubcap,A,4,4,4,4,4,4,4,4
      `), `0 battles
Winning Team (Autobots): Bluestreak, Hubcap
Survivors from losing team (Decepticons): `
      )
    })
    it('should handle one-sided fight (Decepticon)', () => {
      assert.equal(transformersBattleSimulator(`
        Soundwave,D,8,9,2,6,7,5,6,10
        Buzzsaw,D,5,8,8,4,6,7,4,9
      `), `0 battles
Winning Team (Decepticons): Soundwave, Buzzsaw
Survivors from losing team (Autobots): `
      )
    })
    it('should handle mutual destruction', () => {
      assert.equal(transformersBattleSimulator(`
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
        Predaking,D,8,9,2,6,7,5,6,10
        Optimus Prime,A,6,6,7,9,5,2,9,7
      `), `5 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
  })
  describe('#3 Aequelibrium Input', () => {
    it('enter description here', () => {
      assert.equal(transformersBattleSimulator(`
      
      
      `), 
      `0 battles
Winning Team (Autobots): 
Survivors from losing team (Decepticons): `
      )
    })
  })
})
