import { expect } from 'chai'
import { min } from './math'

describe('math/min', function() {

  it('reducer throws when no action passed', function() {
    expect(todos.reducer).to.throw()
  })

  it('reducer delivers initialState if no matching action found', function() {
    expect(todos.reducer(undefined, {})).to.equal(todosState)
  })

  it('exports actions approporiately', function() {
    expect(typeof todos.actions.addTodo).to.equal('function')
  })

  it('actions creators create action objects', function() {
    expect(todos.actions.addTodo('miffles')).to.eql({ type: 'ADD_TODO', text: 'miffles' })
  })

  it('actions creators may be registered without a reducer (not sure why)', function() {
    expect(todos.actions.missing()).to.eql({ type: 'MISSING' })
  })

  it('may register multiple action creators to a single reducer', function() {
    expect(typeof todos.actions.setCategory).to.equal('function')
    expect(typeof todos.actions.setCategoryFoo).to.equal('function')
  })

  it('reducer works as intended', function() {
    let { addTodo, clearTodos } = todos.actions
    let miffles = addTodo('miffles')
    let vlad = addTodo('vlad')
    let clearAction = clearTodos()
    let state = { items: [], category: undefined }

    state = todos.reducer(state, miffles)
    expect(state.items).to.eql(['miffles'])

    state = todos.reducer(state, vlad)
    expect(state.items).to.eql(['miffles', 'vlad'])

    state = todos.reducer(state, clearAction)
    expect(state.items).to.eql([])
  })

  it('multiple actions sharing one reducer works as intended', function() {
    let { setCategory, setCategoryFoo } = todos.actions
    let state = { items: [], category: 'start' }

    expect(state.category).to.equal('start')
    expect(state.items).to.eql([])

    state = todos.reducer(state, setCategory('cats'))
    expect(state.category).to.equal('cats')

    state = todos.reducer(state, setCategoryFoo())
    expect(state.category).to.equal('foo')
  })

  it('maps actions onto root if no conflicts', function() {
    expect(typeof todos.addTodo).to.equal('function')
    expect(todos.addTodo).to.equal(todos.actions.addTodo)
  })
})

describe('merge([ maps ]): object', function() {
  let todos = automap(sampleConfig)
  let merged = merge([ todos ])
  console.log('merged', merged)

  it('merges maps into { namespace: reducer(state, action) } format for use in rootReducer/combineReducers', function() {
    expect(typeof merged.foo).to.equal('function')
  })
})
