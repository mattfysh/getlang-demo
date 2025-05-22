import path from 'node:path'
import { execute } from "@getlang/get"

const getfile = path.resolve(__dirname, 'Example.get')
const query = await Bun.file(getfile).text()
const result = await execute(query)

console.log('\n✅ Successfully extracted data from example.com\n')
console.dir(result)
