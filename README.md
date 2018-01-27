# nodejs
crud
restful 【增删改查】

- api 
1. 获取所有note GET:  /api/notes
2. 添加一个note POST: /api/note/create
    req{note :'xxxx'}

    res{
        status:200,
        data:[{},{},{}]
    }
    else
    {
        status:204,
        errorMsg: '失败的原因'
    }

3. 修改note POST: /api/note/edit
    req{
        id: 100
        note:'new note'
    }
4. 删除note POST:  /api/note/remove
    req{
        id:100
    }
