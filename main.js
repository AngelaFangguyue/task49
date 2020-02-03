let string = `/*这个小demo是展示一只皮卡丘的制作过程*/
/*首先皮卡丘是黄色的，准备一个黄色的背景*/
.skin{
    background-color:rgba(255,230,0);
    }
/*开始画皮卡丘的小鼻子*/
/*先画一个三角形》变为扇形》调整位置*/
.nose {
  border: 16px solid black;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom: none;
  border-radius: 16px/8px;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -16px;
}
/*以鼻子为基准，画一双萌萌的大眼睛*/
/*先画圆》调整位置*/
.eye {
  width: 64px;
  height: 64px;
  border: 3px solid black;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -32px;
  background-color: #2e2e2e;
}
/*这是左眼睛*/
.left_eye {
  transform: translateX(-130px);
}
/*这是右眼睛*/
.right_eye {
  transform: translateX(130px);
}
/*给两个眼睛加东西，让两个眼睛更有神，会说话*/
.eye::before {
  content: "";
  display: block;
  border: 3px solid black;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -1px;
  left: 4px;
}
/*俏皮的嘴巴,分为两片*/
.lips {
  border: 3px solid black;
  width: 100px;
  height: 20px;
}
/*通过旋转移动圆角让左右边的小嘴唇翘起来，先设置左边的小嘴巴*/
.left_lips {
  border-radius: 10% 0 50% 50%;
  transform: rotate(-20deg) translateX(9px);
  border-right-color: transparent;
}
/*接下来是右边的小嘴巴*/
.right_lips {
  border-radius: 0 20% 50% 50%;
  transform: rotate(20deg) translateX(-9px);
  border-left-color: transparent;
}
.lips
{border-top-color: transparent;}
/*这样左右两边就各有一个翘起来的嘴巴啦*/
/*接着开始画舌头喽*/
.yuan1 {
  width: 190px;
  height: 1000px;
  border: 3px solid black;
  position: absolute;
  bottom: 23px;
  left: 50%;
  margin-left: -95px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(155, 0, 10);
}
/*下面的舌头颜色不一样哟，再设置一个div来画*/
.yuan2 {
  width: 100%;
  height: 350px;
  position: absolute;
  bottom: -210px;
  border-radius: 50%/20%;
  background-color: rgba(255, 72, 95);
}
/*舌头把嘴唇盖住了，要让嘴唇露出来*/
.lips {
  z-index:1;
}
/*有一部分的舌头是不需要的，我们把它覆盖掉*/
.lips,.lips::before{
  background-color:rgba(255,230,0);
}
.left_lips::before {
  top: -15px;
  left: 15px;
}
.right_lips::before {
  top: -12px;
  left: 48px;
}
/*可爱的脸蛋来啦*/
/*脸蛋的画法和眼睛的画法如出一辙，这里就不多加赘述了*/
.face,.face img{
  display:block;
}
}`;
let desc = document.querySelector(".desc");
let wre_sty = document.querySelector(".wre_sty");
let i = 0;
//由于string里有换行,回车等特殊字符，所以将换行全部替换
let newString = "";

//console.log("string[9]===", string[9].charCodeAt());//换行的ascii码是10 html代码是<br>
// setTimeout(() => {
//     desc.innerHTML = string[i];
//     i++;
// }, 1000);

////////////////////////////////////////
// let cleite = setInterval(() => {
//   desc.innerHTML = string.slice(0, i + 1);
//   i++;
//   console.log(
//     `string[i]!=="undefined"`,
//     i,
//     string.length,
//     string[i],
//     desc.innerHTML
//   );
//   if (i >= string.length) {
//     console.log(`string[i]==="undefined"`, i, string.length, string[i]);
//     clearInterval(cleite);
//   }
// }, 200);
////////////////////////////////////////
//上面的代码也可以实现文字动态输出
////////////////////////////////////////
let step = () => {
  setTimeout(() => {
    if (string[i] === "\n") {
      newString = newString + "<br>";
    } else if (string[i] === " ") {
      newString = newString + "&nbsp;";
    } else {
      newString = newString + string[i];
    }
    desc.innerHTML = newString;
    desc.scrollTop = desc.scrollHeight;
    wre_sty.innerHTML = string.slice(0, i + 1);
    i++;
    if (i >= string.length) {
      return; //递归终止条件
    } else {
      step();
    }
  }, 1);
};
step();
