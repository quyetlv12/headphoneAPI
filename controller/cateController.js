//start import model user
import Categories from "../model/categoryModel";
import _ from "lodash"

//start hiển thị danh sách danh mục
export const showListCate = (req, res, next) => {
  Categories.find({})
    .then((categories) => {
      categories = categories.map((categories) => categories.toObject());
      res.json(categories);
    })
    .catch(next);
};

//start add cate


export const categoryById = (req,res,next,id) =>{
  Categories.findById(id).exec((err,category)=>{
    if(err || !category) {
      res.status(400).json({
        error : 'error'
      })
    }
    req.category = category
    next()
  })
}




export const cateDetail = (req,res) =>{
  return res.json(req.category)
}



export const updateCategories = (req,res,next ) =>{
  const category = _.assignIn(req.category, req.body);
  category.save((err,db)=>{
    if(err){
      res.status(400).jsom({
        error : "update category error"
      })
    }
    res.status(200).json(db)
  })
}


export const addCategories = (req, res, next) => {
  const category = new Categories(req.body)
  console.log(category)
  category.save((err,data)=>{
    if(err){
      res.status(400).json({
        error : "add category error"
      })
    }
    else{
      res.json(data)
    }
  })
};

//start delete cate

export const deleteCategories = async (req, res, next) => {
  let category = req.category
  category.remove((err,db)=>{
    if(err){
      res.status(400).json({
        error : "delete category error"
      })
    }
    else{
      res.json(db)
    }
  })
};

//start edit cate
