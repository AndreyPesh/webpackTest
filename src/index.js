const person = {
  name: 'Andy',
}

function info(phone, email) {
  console.log('Name', this.name)
  console.log('Phone', phone)
  console.log('Email', email)
  return ''
}

function bind(func, context, ...args) {
  const fn = func
  const uniqueKey = new Date()
  return function(...rest) {
    context[uniqueKey] = fn
    const result = context[uniqueKey](...args.concat(rest))
    delete context[uniqueKey]
    return result
  }
}

Object.prototype.myBind1 = function(context, ...args) {
  const currentContext = this
  return function(...rest) {
    return currentContext.apply(context, args.concat(rest))
  }
}

Object.prototype.myBind2 = function(context, ...args) {
  const currentContext = this
  return function(...rest) {
    const uniqueKey = new Date()
    context[uniqueKey] = currentContext
    const result = context[uniqueKey](...args.concat(rest))
    delete context[uniqueKey]
    return result
  }
}

info.myBind1(person, '2039490375')( 'mail')
const binding = info.myBind2(person)
binding('123123', 'newmail')
