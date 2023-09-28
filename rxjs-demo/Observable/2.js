const {Observable} = require('rxjs')

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});


console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
foo.subscribe(x => {
    console.log(x);
  });
// 输出 before, hello , 42, after, 41
