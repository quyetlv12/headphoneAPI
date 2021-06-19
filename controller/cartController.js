import Cart from '../model/cartModel'
//add Carts
export const addCarts = (req, res, next) => {
    const cart = new Cart(req.body)
    cart.save((err, db) => {
      if (err) {
        res.status(400).json({
          error: "lỗi",
        });
      } else {
        res.json({
          message: "Thêm sản phẩm thành công",
        });
      }
    });
  };



  // show list cart 
  export const showListCart = (req, res, next) => {
    Cart.find({})
      .then((News) => {
        News = News.map((News) => News.toObject());
        res.json(News);
      })
      .catch(next);
  };
  