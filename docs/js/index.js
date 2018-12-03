"use strict";var app=new Vue({el:"#app",data:{sizeType:"1",canvasData:{width:640,height:480},frameData:{row:1,col:1,prewidth:640,preheight:480},fileList:[],imgLoading:!1,cssStr:"",cssAttr:{unit:"1",design:"640",name:"keys",loop:!1,loopNum:0,time:1,delay:0},imgStr:"",btnText:"开始生成",btnLoading:!1},computed:{canvas:function(){return"1"===this.sizeType?{width:+this.canvasData.width,height:+this.canvasData.height}:"2"===this.sizeType?{width:this.frameData.col*this.frameData.prewidth,height:this.frameData.row*this.frameData.preheight}:void 0}},methods:{fileChange:function(t,a){this.fileList=a},fileRemove:function(t,a){this.fileList=a},dealCss:function(t,a){var e=this.cssAttr,i="",n=0,s=0;switch(e.unit){case"1":i="px",n=+this.frameData.prewidth,s=+this.frameData.preheight;break;case"2":i="rem",n=+this.frameData.prewidth/100,s=+this.frameData.preheight/100;break;case"3":i="vw",n=+this.frameData.prewidth/+e.design,n=+this.frameData.preheight/+e.design}for(var o=(100/this.fileList.length).toFixed(2),c=".".concat(e.name," {\n  background-size: ","".concat(a*n).concat(i," ").concat(t*s).concat(i),";\n}\n.").concat(e.name,".anim {\n  animation: ").concat(e.name," ").concat(e.time,"s ").concat(+e.delay?"".concat(e.delay,"s"):""," steps(1, end) forwords ").concat(e.loop?+e.loopNum?e.loopNum:"infinite":"",";\n}"),h="",r=0;r<this.fileList.length;r++)h=0===r?"  0% { background-position: 0 0; }":r===this.fileList.length-1?"".concat(h,"\n  100% { background-position: ","".concat(-r%a*n+i," ").concat(-Math.floor(r/a)*s+i),"; }"):"".concat(h,"\n  ").concat((o*r).toFixed(2),"% { background-position: ","".concat(-r%a*n+i," ").concat(-Math.floor(r/a)*s+i),"; }");h="@keyframes ".concat(e.name," {\n").concat(h,"\n}"),this.cssStr="".concat(c,"\n\n").concat(h)},startDealing:function(t){var e=document.getElementById("cvs");0===t&&(e.height=e.height);var i=e.getContext("2d"),n=this,s=t,o=new Image,a=new FileReader;this.btnText="生成中",this.btnLoading=!0,o.onload=function(){var t=1,a=1;switch(n.sizeType){case"1":a=+n.canvasData.width/+n.frameData.prewidth,t=+n.canvasData.height/+n.frameData.preheight;break;case"2":a=+n.frameData.col,t=+n.frameData.row}0===s&&n.dealCss(t,a),i.drawImage(o,s%a*+n.frameData.prewidth,Math.floor(s/a)*+n.frameData.preheight),s++,n.fileList.length>s?setTimeout(function(){n.startDealing(s)},1e3):(n.imgStr=e.toDataURL("image/png"),n.btnText="开始生成",n.btnLoading=!1,n.$message.success("图片生成完成"))},a.onload=function(t){o.src=t.target.result},a.readAsDataURL(this.fileList[s].raw)}}});