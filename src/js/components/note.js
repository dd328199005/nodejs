import { layout } from './layout.js'
import { showToast } from 'js/components/toasts.js'
class NoteManager {
    constructor(){
        this.$parent = $('#container')
        this.data = [
            { 
                id:123,
                date: new Date(),
                text: '初始化',
                done: true
            },
            {   
                id: 123,
                date: new Date(),
                text: '初始化',
                done: true
            },
            {
                id: 123,
                date: new Date(),
                text: '初始化',
                done: false
            }
        ]
    }
    init(){
        let data = this.data
        data.forEach(item => {
            let nowTime = item.date
            let nowDay = nowTime.getDate()
            let nowYear = nowTime.getFullYear()
            let nowMouth = nowTime.getMonth() + 1
            let noteStatus = item.done? '<span class="node-done"></span>' : '<span class="node-btn"></span>'
            let html = $(` <div class="item">
                    <div class="note-item" >
                        <div class="note-date">
                            <p>${nowYear}年${nowMouth}月${nowDay}日</p>
                            <span><img src="./imgs/close.png" alt="close"></span>
                        </div>
                        <div class="note-text" contenteditable="true">
                             ${item.text}
                        </div>    
                        <ul class="note-score">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div class="note-status">
                            ${noteStatus}
                        </div>
                        
                    </div>
                </div>`)
            this.$parent.prepend(html)
        });
        
    }
    add(){
        let nowTime = new Date()
        let nowDay = nowTime.getDate() 
        let nowYear = nowTime.getFullYear()
        let nowMouth = nowTime.getMonth() + 1
        let newNote = $(` <div class="item">
                    <div class="note-item" >
                        <div class="note-date">
                            <p>${nowYear}年${nowMouth}月${nowDay}日</p>
                            <span><img src="./imgs/close.png" alt="close"></span>
                        </div>
                        <div class="note-text" contenteditable="true">
                        </div>    
                        <ul class="note-score">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div class="note-status">
                            <span class="node-done" style="display:none"></span>
                            <span class="node-btn"></span>
                        </div>
                        
                    </div>
                </div>`)
        newNote.data('id',{
            date: new Date(),
            text: '初始化',
            done: false
        })
        this.$parent.prepend(newNote)
        layout('#container')
    }
    remove($el){
        let $target = $el.parents('.item')
        $target.remove()
        layout('#container')
        showToast('删除成功')
    }
    edit($el){
        let html = $el.html()
        $el.html(html)
    }
    done($el){
        if ($el.hasClass('node-done')) return showToast('已经完成啦')
        $el.removeClass('node-btn').addClass('node-done')
        showToast('完成')
        
    }
}

$('.note-text').on('focus', function () {
    let $parent = $(this).parent()
    $parent.addClass('zindex')
})
$('.note-text').on('blur', function () {
    let $parent = $(this).parent()
    $parent.removeClass('zindex')
    layout('#container')
})

let noteManager = new NoteManager()
export { noteManager } 