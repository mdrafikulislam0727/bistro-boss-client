import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={"Check It Out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 bt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero id quia a beatae quaerat cumque adipisci rem necessitatibus, exercitationem autem saepe quasi? Ex minima inventore incidunt est optio animi voluptatem quo molestias officia explicabo, magnam at consequatur quam tempora eaque a corrupti, perspiciatis quia voluptas voluptatum expedita accusamus alias in.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;