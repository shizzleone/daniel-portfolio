import fs from "node:fs"

const files = [
  "public/rapidbi-storybook/assets/CanvasV2-B3oezDbP.js",
  "public/rapidbi-storybook/rapidbi-prototype/assets/index-Bu7kvxGo.js",
]

for (const file of files) {
  let source = fs.readFileSync(file, "utf8")
  const before = source
  source = source.replace(/\.\.\.e\.showWidgetSettings!==!1\?\[\{label:"Widget settings",icon:(.*?)\}\]:\[\],\{label:"Rename"/g, '...([{label:"Widget settings",icon:$1},{label:"Rename"')
  if (source === before) throw new Error(`Widget settings menu pattern not found in ${file}`)
  fs.writeFileSync(file, source)
}
