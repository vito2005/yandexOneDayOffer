module.exports = function (input) {
  const result = new Set()
  let obj

  if (typeof input == 'string') {
    obj = JSON.parse(input)
  } else {
    obj = input
  }

  const { absoluteRepoPath, aliases, modules, specs } = obj
  const allAliases = {
    ...aliases,
    '.': absoluteRepoPath,
  }
  const modulesMap = new Map()

  function pathToAbsolutePath(path, aliases = {}) {
    for (a in aliases) {
      if (path.startsWith(a)) {
        path = path.replace(a, aliases[a])
      }
    }
    return path
  }

  modules.forEach((module) => {
    const path = pathToAbsolutePath(module.file, allAliases)

    const children = module.deps.map((d) => {
      let dpath = pathToAbsolutePath(d, allAliases)
      modulesMap.set(dpath, { parent: path })
      return dpath
    })

    modulesMap.set(path, { deps: children, hasChanged: module.hasChanged })
  })

  specs.forEach((spec) => {
    const path = pathToAbsolutePath(spec.file, allAliases)

    spec.deps.forEach((m) => {
      const absM = pathToAbsolutePath(m, allAliases)
      const module = modulesMap.get(absM) || {}

      if (module.hasChanged) {
        result.add(path)
      }

      module.deps &&
        module.deps.forEach((d) => {
          const dModule = modulesMap.get(d) || {}

          if (dModule.hasChanged) {
            result.add(path)
          }
        })
    })
  })

  return [...result].sort()
}
