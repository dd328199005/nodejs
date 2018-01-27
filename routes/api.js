var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notes', function (req, res, next) {
    console.log(1)
    req.query.note
});
router.post('/note/create', function (req, res, next) {
    console.log(2)
    req.body.note
})
router.post('/note/edit', function (req, res, next) {
    console.log(3)
});
router.post('/note/remove', function (req, res, next) {
    console.log(4)
});



module.exports = router;

// 1. 获取所有note GET: /api/notes
// 2. 添加一个note POST: /api/note / create
// req{ note: 'xxxx' }

// res{
//     status: 200,
//         data: [{}, {}, {}]
// }
//     else
// {
//     status: 204,
//         errorMsg: '失败的原因'
// }

// 3. 修改note POST: /api/note / edit
// req{
//     id: 100
//     note: 'new note'
// }
// 4. 删除note POST: /api/note / remove
// req{
//     id: 100
// }