const express = require('express')
const app = express()
const mercadopago = require('mercadopago')

mercadopago.configure({
    sandbox:true,
    access_token:"TEST-f9ba71d5-ae89-48b6-b1e9-e81cd1d4daa8"

})
app.get('/pay',async(req,res)=>{
    var id = 'rnzid'+Date.now()
    var dados = {
        items:[
            item={
                id:id,
                description: '2X Pc Gamer da positivo 5gb de ram e 12 de armazenamento disquete',
                quantity: 5,
                currency_id: 'BRL',
                unit_price: 400.00
            }
        ],

        payer:{
            email:'jonh.me2@jsnode.gf'
        },
        external_reference:{
            id:id
        }
    }
  
    try {
        var payment = await mercadopago.preferences.create(dados)
        console.log(payment)
        return res.redirect(pagamento.body.init_point)
    } catch (error) {
        console.log(error)
    }
})
app.set('view engine','ejs')

app.get('/buy',(req,res)=>{
    res.render('index.ejs')
})
app.listen(3000,()=>{console.log('running')})
