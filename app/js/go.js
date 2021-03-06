  import typish from './typewriter.js'
  import CountUp from 'countup.js'
  // preload
  let s1 = require('../images/i-miss-u.png')
  let s2 = require('../images/lips.svg')
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  img1.setAttribute('src', s1)
  img2.setAttribute('src', s2)

  function go() {
    typish('#typer')
      .type('#coding:utf-8', '<span class="note">')
      .type('0', '<br>')
      .type('"""', '<span class="note">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .type('今天小居居教你写代码呀', '<span class="note">')
      .type('0', '<br>')
      .type('00', '<span class="blank">')
      .wait(10)
      .type('首先，最最重要的是~', '<span class="note">') 
      .wait(10)
      .type('来个么么哒~o(*≧▽≦)ツ', '<span class="note">', 0)
      .wait(10)
      .then(() => {
        memeda()
       })
      .wait(25)
      .type('0', '<br>')
      .type('"""', '<span class="note">') 
      .type('0', '<br>')
      .type('def', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('fall_in_love_with', '<span class="blue">')
      .type('()', '<span class="gray">')
      .type(':', '<span class="gray">')
        // 换行
      .type('0', '<br>')
      // 两个空格
      .type('0000', '<span class="blank">')
        // 第一个options
      .type('the_boy', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('"小居居本居"', '<span class="green">')
      .type('0', '<br>')
      //第二行
      .type('0000', '<span class="blank">')
      .type('the_girl', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('"妮含小姐姐"', '<span class="green">')
      .type('0', '<br>')

      // 四个空格
      .type('0000', '<span class="blank">')
      .type('#下面这个叫元组，其中的元素是不阔以修改的~', '<span class="note">')
      .type('0', '<br>')
      //接下来一行
      .type('0000', '<span class="blank">')
      .type('the_couple', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('(', '<span class="gray">')
      .type('the_boy', '<span class="green">')
      .type(',', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('the_girl', '<span class="green">')
      .type(')', '<span class="gray">')
      .type('0', '<br>')

      //start_time
      .type('0000', '<span class="blank">')
      .type('start_time', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('"2017-08-31"', '<span class="green">')
      .type('0', '<br>')

      //duration
      .type('0000', '<span class="blank">')
      .type('duration', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('=', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('"forever"', '<span class="green">')
      .type('0', '<br>')
      .type('0', '<br>')

      //if语句
      .type('if', '<span class="purple">')
      .type('0', '<span class="blank">')
      .type('__name__', '<span class="gray">')
      .type('0', '<span class="blank">')
      .type('==', '<span class="blue">')
      .type('0', '<span class="blank">')
      .type('\'__main__\'', '<span class="green">')
      .type(':', '<span class="gray">')
      .type('0', '<br>')

      .type('0000', '<span class="blank">')
      .type('while', '<span class="purple">')
      .type('(', '<span class="gray">')
      .type('true', '<span class="red">')
      .type('):', '<span class="gray">')
      .type('0', '<br>')

      .type('00000000', '<span class="blank">')
      .type('fall_in_love_with', '<span class="blue">')
      .type('()', '<span class="gray">')
      .type('0', '<br>')

      .wait(25)
      .then(() => {
        transBoard('show', () => {
          foreverLove()
        })
      })
  }
  function memeda() {
    let lip = document.createElement('div')
    lip.className = 'lip'
    document.body.appendChild(lip);
    setTimeout(() => {
      lip.remove()
    }, 2500)
  }
  function transBoard(type, cb) {
    let board = document.querySelector('.board')
    board.style.display = 'block'
    setTimeout(() => {
      if (!type || type === 'hide') {
        board.style.right = 'calc(-100vw - 10px)'
      } else {
        board.style.right = '0'
      }
    }, 30);
    setTimeout(() => {
      cb && cb()
    }, 2000)
  }
  function foreverLove() {
    let showArea = document.querySelector('#showArea')
    // let heartBg = document.querySelector('#heartBg')
    let foot = document.querySelector('.foot')
    let send = document.querySelector('#send')
    //监听点击事件
    send.addEventListener('click', () => {
      stars()
    })
    showArea.className = 'show'
    // heartBg.style.display = 'block'
    heartMain.style.display = 'block'
    foot.style.display = 'block'
    setTimeout(() => {
      count()
    }, 2000)
  }
  function count() {
    //一个重要滴日子。
    const date = new Date('2017/08/31 13:48:00')
    let end = new Date()
    let seconds = (Date.parse(end) - Date.parse(date)) / 1000
    let days = Math.floor(seconds / (3600 * 24))
    let timer = document.querySelector('#timer')
    timer.style.display = 'block'
    let numAnim = new CountUp("count", 0, days, 0, 5)
    numAnim.start()
  }
  //点击后的事件
  function stars() {
    let send = document.querySelector('#send')
    send.setAttribute('disabled', '')
    //设置一个延迟，防止多次点击。
    setTimeout(() => {
      send.removeAttribute('disabled')
    }, 2000)
    let max = 5
    let startsContainer = document.createElement('div')
    startsContainer.className = 'startsContainer'
    for (let i = 0; i < 30; i++) {
      let img = document.createElement('img')
      let src = require('../images/i-miss-u.png')
      img.setAttribute('src', src)
      img.setAttribute('class', 'stars')
      startsContainer.appendChild(img)
    }
    //这里有点想改了。
    let comments = document.querySelectorAll('.comment')
    //let replys = document.querySelectorAll('.reply')
    let comentsLength = comments.length
    console.log(comments.length)
    if(!comments||comments.length <= 7)
    {
          let comment = document.createElement('div')
          comment.className = 'comment'
          comment.style.bottom = 135 + comentsLength *2* 55 + 'px'
          comment.innerHTML = '我想你了~'
          document.body.appendChild(comment)
          
          let reply = document.createElement('div')
          reply.className = 'reply'
          reply.style.bottom = 80 + comentsLength *2* 55 + 'px'
          reply.innerHTML = '我也想你了~mua~'
          document.body.appendChild(reply)
    }
    /*
    if (comments) {
      //两个长度是一样的
      comentsLength = comments.length
      //超过7次就清零。
      if (comentsLength > 7) {

        
        for(let i = 0; i < comentsLength; i++) {
          comments[i].remove()
          replys[i].remove()
        }
        comentsLength = 0
      }
    }
*/
    document.body.appendChild(startsContainer)
    let els = document.querySelectorAll('.startsContainer')
    let current = els.length
    if (current > max) {
      els[0].remove()
    }
  }
  export {
    go
  }
