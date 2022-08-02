import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Shop } from '../../context/ShopContext';
import orderData from '../../utils/generateOrder';
import guardarOrden from '../../utils/saveNewOrder';
import './styles.css';

const CartForm = () => {
    const { cart, finalPrice,removeAllItems } = useContext(Shop);



    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            emailValidate: "",
            address: ""
        }
    });

    const confirmOrder = async (informacion) => {

       guardarOrden(cart, informacion)
    
        removeAllItems();
        
      }

    const onSubmit = data => {

    const  informacion =   orderData(data.firstName, data.lastName, data.email, data.address, cart, finalPrice)
      confirmOrder(informacion);
    };
    const firstName = watch('firstName');
    const lastName = watch('lastName');
    const email = watch('email');
    const emailValidate = watch('emailValidate');
    const address = watch('address');

    return (
     
            <div className="slide-in-right">

                <form className="formCart" onSubmit={handleSubmit(onSubmit)}>
                    <h2>COMPLETE YOUR INFORMATION TO FINISH</h2>
                    <input className="formCart__field" name="firstName" placeholder="First Name"{...register("firstName", { required: 'Required field', minLength: { value: 3, message: "Minimum length is 3" } })} />
                    {firstName.length >= 3 ? <div className="check">✅</div> : <p>Name must be at least 3 characters</p>}
                    <input className="formCart__field" name="lastName" placeholder="Last Name"{...register("lastName", { required: 'Required field', minLength: { value: 3, message: "Minimum length is 3" } })} />
                    {lastName.length >= 3 ? <span className="check">✅</span>: <p>Last name must be at least 3 characters</p>}
                    <input className="formCart__field" name="email" placeholder="Email" type="email" {...register("email", { required: 'Required field' })} />

                    <input className="formCart__field" name="emailValidate" type="email" placeholder="Write again your email" {...register("emailValidate", { required: 'Required field' })} />
                    <p> {emailValidate === email ? "" : "email no coincide"}  </p>

                    <input className="formCart__field" name="address" placeholder="Address" {...register("address", { required: 'Required field', minLength: { value: 10, message: "Minimum length is 10" } })} />
                    <p>{address.length >= 3 ? <span className="check">✅</span> : "Address must be at least 10 characters"}</p>
                    <input className="buyNow" value= "Buy Now" type="submit"  />
                </form>


            </div>
    )
}

export default CartForm

