
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer';




const app=express();
app.use(cors());
app.use(express.json())
app.use(express.static('public'));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/image')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }

})
 export const upload=multer({
    storage:storage
})


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})
app.post('/upload',upload.single('image'),(req,res)=>{
    const image=req.file.filename;
    const sql="UPDATE student SET image=?"
    db.query(sql,[image],(err,result)=>{
        if(err)return res.json({message:"Error"});
        return res.json({status:"Success"})
    })
}
    
)

app.get('/', (req,res)=>{
   const sql ="SELECT * FROM student";

  db.query(sql,(err,result)=>{
    if(err) return res.json("Error");
    return res.json(result);
   })
})

app.post('/student',(req,res)=>{
    const sql="INSERT INTO student (`name`,`email`,`password`,`des`,`hobby`) VALUES (?)"
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.des,
        req.body.hobby,
        req.file.filename
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json(err)
            return res.json(result);
    })
})

app.get('/read/:id', (req,res)=>{
   const sql ="SELECT * FROM student WHERE id=?";
   const id=req.params.id;

  db.query(sql,[id],(err,result)=>{
    if(err) return res.json({Message:"Error inside server."});
    return res.json(result);
   })
})


app.put('/update/:id',(req,res)=>{
    const sql="UPDATE student SET `name`=?, `email`=? WHERE id=?";
    const id=req.params.id;
    db.query(sql,[req.body.name,req.body.email,id],(err,result)=>{
        if(err) return res.body.json({Message:"Error inside server."});
        return res.json(result);
    })
})


app.delete('/delete/:id',(req,res)=>{
    const sql="DELETE from student WHERE id=?";
     const id=req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.body.json({Message:"Error inside server."});
        return res.json(result);
    })
})

app.listen(8001,()=>{
    console.log("listening")
});