
const express = require("express")
 const mongoose = require("mongoose")
const cors = require("cors")
 const app = express()
app.use(cors())
 app.use(express.json())
 

 mongoose.connect("mongodb://localhost:27017/NoteManagement").then(()=>{

    console.log("data has been connected sucessfully")
    
  }).catch((error)=>{
    console.log(error)
  })


 //insert

  const NoteModel = require("./Model/NoteSchema");
  app.post("/note/create", async (req, res) => {
          const note = NoteModel(req.body);
          const saveNote = await note.save();
  
          if (saveNote) {
              res.send("note has been registered successfully");
          }
      
  });
  
  // read
  
  app.get("/note/management", async (req,res)=>{
  const getAllNote = await NoteModel.find()
  if(getAllNote){
          res.send(getAllNote)
      }
  })
  
  
  // //update
  
  // app.put("/note/update/:id",async (req,res)=>{
  //   const updated= await NoteModel.updateOne(
  //         {_id: req.params.id},
  //         {$set: req.body} 
  //   )
  //    if(updated){
  //   res.send("note has been updated succesfully")
  //   }
      
  // })
  
  //delete
  
  app.delete("/note/delete/:id", async (req,res)=>{
      const deleted = await NoteModel.deleteOne(
          {_id: req.params.id}
      )
      if(deleted){
          res.send("note has been deleted successfully")
      }
  })


  //update Api

  app.put("/note/update/:id",async (req,res)=>{
    const updated = await NoteModel.updateOne(
        {_id: req.params.id},
        {$set:req.body}
    )
    if(updated){
        res.send("data has been updated succesfully")
    }
})


//Api that displays single data

app.get("/note/single/:id", async (req,res)=>{
    const getSingleData = await NoteModel.find({_id:req.params.id})

    if(getSingleData){
        res.send(getSingleData)
    }
})





  
//search

app.post("/search/note", async (req,res)=>{
  const Search = await NoteModel.findOne({ID:req.body.ID})

  if(Search){
res.send(Search)
  }
  else({
      error: "Not Found"
  })
 
  
})



  app.listen(4000, ()=>{
    console.log("the server is running on port 2000")
  })