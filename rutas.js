const express=require ('express')
const rutas=express.Router()

rutas.get('/',(req,res)=>{
     req.getConnection((err,conn)=>{
         if(err)return res.send(err)
         conn.query('select *from categorias',(err,rows)=>{
           if(err)return res.send(err)
           res.json(rows)
         })
     })
})




rutas.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
        conn.query('insert into categorias set ?',
        [
            req.body
        ]
        ,(err,rows)=>{
          if(err)return res.send(err)
          res.send('Categoria insertada papu')
        })
    })
})


rutas.delete('/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
      if(err)return res.send(err)
      conn.query('delete from categorias where id=?',
      [
          req.params.id
      ]
      ,(err,rows)=>{
        if(err)return res.send(err)
        res.send('Categoria borrada papu')
      })
  })
})



rutas.put('/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
      if(err)return res.send(err)
      conn.query('update categorias set ? where id = ?',
      [
          req.body,
          req.params.id
      ]
      ,(err,rows)=>{
        if(err)return res.send(err)
        res.send('Categoria actualizada papu')
      })
  })
})




module.exports=rutas