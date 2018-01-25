import { showToast } from 'js/components/toasts.js'
import { layout } from 'js/components/layout.js'
import 'scss/_index.scss'
import 'scss/normalize.css'

showToast('设置成功')
layout('#container')

function add() {
    let html = ` <div class="item">
                    <div class="note-item" contenteditable="true"></div>
                </div>`
    $('#container').append(html)
    layout('#container')
}
window.add = add

$('.note-text').on('focus', function(){
    console.log(2)
    let $parent  = $(this).parent()
    $parent.addClass('zindex')
    $(this).height('500px')
})
$('.note-text').on('blur', function(){
    let $parent = $(this).parent()
    $parent.removeClass('zindex')
    layout('#container')
})





