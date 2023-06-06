import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import ChefItem from "./ChefItem";

const ChefRecommenDs = () => {
    const [chef, setChef]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const popularItems =data.filter(item =>item.category === 'offered');

            setChef(popularItems)})
    },[])
    return (
        <section>
            <SectionTitle 
            heading={"CHEF RECOMMENDS"}
            subHeading={"Should Try"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    chef.slice(0, 3).map(item =><ChefItem
                    key={item._id}
                    item={item}
                    ></ChefItem>)
                }
            </div>
        </section>
    );
};

export default ChefRecommenDs;