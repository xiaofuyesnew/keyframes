"use strict";var canvas=document.getElementById("cvs"),app=new Vue({el:"#app",data:{sizeType:"1",canvasData:{width:640,height:480},frameData:{row:1,col:1,prewidth:640,preheight:480},fileList:[],imgLoading:!1,cssStr:""},computed:{canvas:function(){return"1"===this.sizeType?{width:+this.canvasData.width,height:+this.canvasData.height}:"2"===this.sizeType?{width:this.frameData.col*this.frameData.prewidth,height:this.frameData.row*this.frameData.preheight}:void 0}},methods:{fileChange:function(t,e){this.fileList=e},fileRemove:function(t,e){this.fileList=e}}});