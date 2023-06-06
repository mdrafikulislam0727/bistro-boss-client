/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () =>{
    const {user, loading}=useAuth()
    console.log(user)
    const token =localStorage.getItem('access-token')
    if(!user){
        return [[], '']
    }
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email,!token],
        enabled: !loading && !!user.email && !!localStorage.getItem('access-token'),
       
        queryFn: async () =>{
          
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
    return [cart,refetch]
}
export default useCart;


 // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },