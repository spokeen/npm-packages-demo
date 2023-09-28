const {Observable} = require('rxjs')

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  setTimeout(() => {
    subscriber.next(41);
  })
});


console.log('before');
const subscription = foo.subscribe(x => {
  console.log(x);
});
console.log('after');
subscription.unsubscribe()

foo.subscribe(x => {
    console.log(x);
});
/**
before
Hello
42
after
Hello
42
41
 */
