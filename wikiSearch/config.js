/**
 * Created by jk on 27/11/15.
 */

System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    'rx.all': 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/3.1.1/rx.all.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});
