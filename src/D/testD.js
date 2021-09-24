const input = {
  // абсолютный путь до дирректории проекта в файловой системе
  absoluteRepoPath: '/var/www/projects/project1',
  // список алиасов по путям из исходной системы сборки
  aliases: {
    '@': './src',
  },
  // информация обо всех модулях данного проекта
  modules: [
    {
      // относительный от корня путь
      file: './src/pages/1.js',
      deps: [
        // валидная для исходной системы сборки строка, описывающая путь до модуля
        // гарантируется, что такой модуль существует и описан в данной секции
        '/var/www/projects/project1/src/pages/a.js',
        './b.js',
      ],
      // был ли изменен программный код данного модуля
      // ключ может не присутствовать, это означает, что код не был изменен
      hasChanged: true,
    },
    {
      file: './src/pages/a.js',
      deps: ['@/pages/b.js'],
    },
    {
      file: './src/pages/b.js',
      deps: [],
      hasChanged: true,
    },
  ],
  specs: [
    // информация о тестах
    {
      file: './src/specs/1.js',
      deps: ['/var/www/projects/project1/src/pages/a.js'],
    },
  ],
}

const getTests = require('./D.js')

console.log('tests: ', getTests(input))
