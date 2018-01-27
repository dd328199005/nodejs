export class Navbar {
    constructor($el){
        this.$el = $el
        this.bindEvent()
    }
    bindEvent(){
        this.$el.find('li').on('click',(e)=>{

            let $target = $(e.target)
            if ($target.index() === 2) {
                let span = $target.children().eq(0)
                let html =`< span >
                    <img src="./imgs/triangle.png" alt="triangle">
                    </span>`
                span.toggleClass('reverse')
                return
            }
            $target.siblings().removeClass('active') 
            $target.addClass('active') 
        })
    }
}