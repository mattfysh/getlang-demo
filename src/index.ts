import path from 'node:path'
import { execute } from "@getlang/get"

type Inputs = Record<string, any>

async function extract(site: string, module: string, inputs?: Inputs) {
  const getpath = path.resolve(__dirname, `${site}/${module}.get`)
  const query = await Bun.file(getpath).text()
  const result = await execute(query, inputs)

  console.log(`\n✅ Successfully extracted ${module} data from ${site}\n`)
  console.dir(result)
}

await extract('example.com', 'Home')
await extract('books.toscrape.com', 'Book', { slug: 'the-requiem-red_995' })
