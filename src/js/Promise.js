const PENGDING=1;
const RESOLVE=2;
function Promise(fn)
{
  this._deferreds=[];
  this._state=PENGDING;
  this._value=null;
  var _this=this;
  function resolve(value) {
    _this._state=RESOLVE;
    _this._value=value;
    setTimeout(function () {
      _this._deferreds.forEach(function (deferred) {
        deferred(value);
      });
    },0);
  }
fn(resolve);
}
Promise.prototype.then=function (deferred) {
  if(this._state==PENGDING)
  {
    this._deferreds.push(deferred);
    return this;
  }
  deferred(this._value);
  return this;
}
var p=new Promise(function(resolve){
  resolve("完成");
}).then(function onResolve(value) {
return new Promise(function (resolve) {
setTimeout(function () {
  resolve("新的promise");
},2000);
  //console.log(value+"新的promise");
});
}).then(function onResolve(value) {
  console.log("最后"+value);
});
setTimeout(function functionName() {
  p.then(function onResolve(value) {
    console.log("延时最后"+value);
  });
},2000);
