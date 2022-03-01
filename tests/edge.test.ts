import { test } from "@jest/globals"
import fs from "fs/promises"

import type { EdgeOptions } from "~index"
import { deployEdge } from "~index"

test("dry run successful", async () => {
  // process.env.NODE_ENV = "test"
  const opt = JSON.parse(await fs.readFile("keys.json", "utf8"))
    .edge as EdgeOptions

  await deployEdge({
    dry: true,
    cookie: opt.cookie,
    extId: opt.extId,
    zip: "test.zip"
  })
})
