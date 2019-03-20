# aeq
Castle Company &amp; Transformers

# Running Tests
Running Castle Company - `npm run test-castle`
Running Transformers - `npm run test-transformers`
Runnoing both - `npm run test`

# Adding own test case

## Castle
Edit `test/test-castle.js`

```
describe('#3 Aequelibrium Input', () => {
  it('enter description here', () => {
    // Enter values and expected result
    assert.equal(constructCastles([1]), 1)
  })
})
```

## Transformer
Edit `test/test-transformers.js`

```
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
```
