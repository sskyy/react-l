import {mapValues} from './util'

// TODO add default style conflict rules?

export default class Style{
  constructor(){
    this.data = {}
    this.operator  = null
  }
  open( operator ){
    console.log( operator)
    this.checkOperatorConflict(true)
    this.operator = operator
  }
  close(){
    this.checkOperatorConflict()
    this.operator = null
  }
  checkOperatorConflict(tryToOpen){
    if( (this.operator!== null && tryToOpen === true) ||
      ( this.operator=== null && tryToOpen !== true)
    ) throw new Error(`What year is it? Is javascript still running on single thread? Operator conflict ${this.operator} ${tryToOpen}`)
  }
  set( key, value ){
    if( this.operator === null ) throw new Error('You have to assign in before operating style.')

    if( typeof key === 'object' ) return Object.keys(key).forEach(styleKey=>this.set(styleKey, key[styleKey]))

    if( this.data[key] === undefined ){
      this.data[key] = {
        value,
        history : [{
          value : value,
          operator: this.operator,
        }]
      }
    }else{

      if(this.data[key] !== value){
        console.warn(`You are changing  ${key} from ${this.data[key]} set by  ${this.data[key].history[this.data[key].history.length-1].operator} to ${value}`)
      }else{
        this.data[key] = {
          value,
          history : this.data[key].history.concat({
            value : value,
            operator: this.operator,
          })
        }
      }

    }
  }
  generate(){
    return mapValues(this.data, (styleValueObject)=>styleValueObject.value)
  }
}

