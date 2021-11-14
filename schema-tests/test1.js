const Ajv = require('ajv')

const ajvObj = new Ajv()
const schema = {
  type: 'string',
  minLength: 10,
}
const validate = ajvObj.compile(schema)
const valid = validate('joker')

if (!valid) console.log(validate.errors)
