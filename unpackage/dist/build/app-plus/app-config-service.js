
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/cake/cake","pages/userinfo/userinfo","pages/detail/detail","pages/home/home","pages/home/banner-ad","pages/collect-data/collect-data","pages/cart/cart","pages/regist/regist","pages/login/login","pages/sale/sale","pages/order/order","pages/address/address","pages/address-detail/address-detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mcake","compilerVersion":"3.4.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/cake/cake","meta":{},"window":{"enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/home/home","meta":{},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/home/banner-ad","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/collect-data/collect-data","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/cart/cart","meta":{},"window":{"enablePullDownRefresh":false,"navigationStyle":"custom","disableScroll":false}},{"path":"/pages/regist/regist","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/sale/sale","meta":{},"window":{"enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/address/address","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/address-detail/address-detail","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});