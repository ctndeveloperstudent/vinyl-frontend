import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    if (!userId || !itemId) {
      return res.json({ success: false, message: "Invalid request data" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added To Cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    if (!userId || !itemId || quantity < 0) {
      return res.json({ success: false, message: "Invalid request data" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; 

    if (cartData.hasOwnProperty(itemId)) {
      if (quantity === 0) {
        delete cartData[itemId]; 
      } else {
        cartData[itemId] = quantity; 
      }

      await userModel.findByIdAndUpdate(userId, { cartData });
    }
    
    res.json({ success: true, message: "Cart Updated", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "User ID is required" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {}; // Ensure cartData exists

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { addToCart, updateCart, getUserCart };
