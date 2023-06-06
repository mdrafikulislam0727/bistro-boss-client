import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price,recipe, _id} =item
    const {user} =useContext(AuthContext)
    const [,refetch]=useCart()
    console.log(refetch)
    const navigate =useNavigate()
    const location =useLocation();
    const handelAddToCart = item =>{
        console.log(item)
        if(user && user.email){
            const cartItem ={menuItemId: _id,name, image,price,email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    refetch() //refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'please login to order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state:{from:location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-2 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;