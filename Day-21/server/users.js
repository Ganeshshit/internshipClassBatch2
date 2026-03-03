
let products = [
    { id: 1, name: 'Laptop', price: 70000 },
    { id: 2, name: 'Phone', price: 30000 },
    { id: 3, name: 'Headphones', price: 2000 },
    { id: 4, name: 'Mouse', price: 800 }
  ];
let orders = [
    { id: 1, userId: 1, productId: 2, quantity: 1 },
    { id: 2, userId: 1, productId: 3, quantity: 2 },
    { id: 3, userId: 2, productId: 1, quantity: 1 }
  ];



exports.allProducts=function allProducts(req,res){
    
    if(products.length==0){
        return res.status(400).send({message:"No users available"})
    }
    return res.status(200).json(products)
}
exports.productsPrice=function productsPrice(req,res){
    const price=req.query.maxPrice
    const Product=products.filter((i)=>i.price<=price)
    return res.status(200).json(Product)
}
exports.allOrders=function allOrders(req,res){
    
    if(orders.length==0){
        return res.status(400).send({message:"No users available"})
    }
    return res.status(200).json(orders)
}
exports.createOrder=function createOrder(req,res){
    const{userId,productId,quantity}=req.body
    const newOrders={
        id:orders.length+1,
        userId:userId,
        productId:productId,
        quantity:quantity

    }
    if(!userId,!productId,!quantity){
        return res.status(400).send({message:"All fields required"})
    }
    console.log(newOrders)
    orders.push(newOrders)
    return res.status(200).json(orders)
    
}
exports.createOrderforId=function createOrderforId(req,res){
    const userId=parseInt(req.params.id)
    const{productId,quantity}=req.body
    const newOrders={
        id:orders.length+1,
        userId:userId,
        productId:productId,
        quantity:quantity

    }
    if(!productId,!quantity){
        return res.status(400).send({message:"All fields required"})
    }
    console.log(newOrders)
    orders.push(newOrders)
    return res.status(200).json(orders)
    
}
exports.Userorders=function Userorders(req,res){
    const userId=req.params.id
    const userOrders=orders.find((i)=>i.userId==userId)
    const productId=userOrders.productId
    const product=products.find((p)=>p.id==productId)
    console.log(product)
    if(!userId){
        return res.status(400).send({message:"Id not found"})
    }
    return res.status(200).json({sucess:true,message:"Get all Product of User",userOrder:userOrders,product:product})
}