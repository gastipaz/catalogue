import React, {useState, useContext} from 'react'
import { ElementWrapper, Button } from '../../elements/PagesElements'
import CartContext from '../../elements/context/CartContext'
import { postData } from '../../elements/context/APIHooks'
import { useNavigate } from 'react-router-dom'

const PurchaseForm = ({setShowForm}) => {

    const navigate = useNavigate()
    const {inCart, setInCart, setNewPurchase, newPurchase, setOrders} = useContext(CartContext)
    const [purchaseData, setPurchaseData] = useState({
        name:"", email:"", address:"", city:"", state:"", zip:"", country:"",
        ccname:"", cardnumber:"", cvc:"", ccmonth:"", ccyear:""
    })

    const handleClick = () => {
        setNewPurchase(!newPurchase)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPurchaseData((prevState)=>({...prevState, [name]:value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `/cart/success`
        const result = await postData(url, {purchase_data:purchaseData, products_data:inCart});
        setOrders(result.data.orders);
        setInCart([]);
        navigate("/order/success")
    }

    return (
        <>
            <ElementWrapper className='purchase-form'>
                <form method='post' id='purchase_form' onSubmit={(event) => handleSubmit(event)}>
                    <ElementWrapper className='purchase-form-section'>
                    <label className='purchase_form_label'>User information</label> <br />
                    <ElementWrapper className='purchase_input_wrapper'>
                        <input type="text" name="name" placeholder="Full name" onChange={(event)=>handleChange(event)} required autoComplete='name' /> <br />
                        <input type="email" name="email" placeholder="Email" onChange={(event)=>handleChange(event)} required autoComplete='email' /> <br />
                    </ElementWrapper>
                    </ElementWrapper>
                    <ElementWrapper className='purchase-form-section'>
                    <label className='purchase_form_label'>Address information</label> <br />
                    <ElementWrapper className='purchase_input_wrapper'>
                        <input type="text" name="address" placeholder="Address" onChange={(event)=>handleChange(event)} required autoComplete='address-line1' /> <br />
                        <input type="text" name="city" placeholder="City" onChange={(event)=>handleChange(event)} required autoComplete='address-level2' /> <br />
                        <input type="text" name="state" placeholder="State or province" onChange={(event)=>handleChange(event)} required autoComplete='address-level1' /> <br />
                        <input type="text" name="zip" placeholder="Zip code" onChange={(event)=>handleChange(event)} required autoComplete='postal-code' /> <br />
                        <input type="text" name="country" placeholder="Country" onChange={(event)=>handleChange(event)} required autoComplete='country' /> <br />
                    </ElementWrapper>
                    </ElementWrapper>
                    <ElementWrapper className='purchase-form-section'>
                    <label className='purchase_form_label'>Card information</label> <br />
                    <ElementWrapper className='purchase_input_wrapper'>
                        <input type="text" name="ccname" placeholder="Name in card" onChange={(event)=>handleChange(event)} required autoComplete='cc-name' /> <br />
                        <input type="text" name="cardnumber" placeholder="Card number" onChange={(event)=>handleChange(event)} required autoComplete='cc-number' /> <br />
                        <input type="text" name="ccmonth" maxLength='2' placeholder="Expiration MM" onChange={(event)=>handleChange(event)} required autoComplete='cc-exp-month' /> <br />
                        <input type="text" name="ccyear" maxLength='4' placeholder="Expiration YYYY" onChange={(event)=>handleChange(event)} required autoComplete='cc-exp-year' /> <br />
                        <input type="text" name="cvc" maxLength='4' placeholder="CVV" onChange={(event)=>handleChange(event)} required autoComplete='cc-csc' /> <br />
                    </ElementWrapper>
                    </ElementWrapper>
                </form>
                <ElementWrapper>
                    <Button primary={false} form='purchase_form' onClick={()=>handleClick()}>Complete purchase</Button>
                </ElementWrapper>
                <ElementWrapper>
                    <Button primary={false} form='purchase_form' onClick={()=>setShowForm(false)}>Close form</Button>
                </ElementWrapper>
            </ElementWrapper>
        </>
    )
}

export default PurchaseForm