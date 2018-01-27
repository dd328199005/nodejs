import { showToast } from 'js/components/toasts.js'
import { layout } from 'js/components/layout.js'
import { noteManager } from 'js/components/note.js'
import { Navbar } from 'js/components/navbar.js'
import 'scss/_index.scss'
import 'scss/normalize.css'

layout('#container')
noteManager.init()
$('.add-note').on('click', function () {
    noteManager.add()
})
$('#container').on('click','.note-date>span',  function () {
    noteManager.remove($(this))
})
$('#container').on('focus', '.note-text' ,function (e) {
   noteManager.edit($(e.currentTarget))
})
$('#container').on('click', '.note-status>span' ,function (e) {
   noteManager.done($(e.currentTarget))
})

new Navbar($('.nav-tab'))



