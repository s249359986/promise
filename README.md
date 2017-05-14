### promise/A+规范

```
promise的构造函数可以接受一个带有已成功，已拒绝方法参数的函数，有三种状态，未完成，已成功，已拒绝。promise需要有一个then方法，处理未完成状态到已成功，或者未完成状态到已️拒绝状态的结果，then方法返回一个新的promise可以实现链式调用。
```

### 核心思想

```
通过then方法将一系列等待回调函数结果的函数放入数组中，待回调函数又未完成转化为已完成状态时，再将数组中函数依次取出执行，并传入结果。
```
### api

```
Promise.all(array[promise]);
处理一组promise待该组所有promise执行成功，或者有一个执行失败时返回结果。

Promise.race(array[promise]);
处理一组promise待该组中所任何一个promise执行成功，或者有执行失败时返回结果。

Promise.resolve(arg);
直接执行一个promise无需new一个promise

Promise.reject(arg);
直接执行一个promise无需new一个promise

Promise.delay(ms,arg);
延迟一定时间执行
```
