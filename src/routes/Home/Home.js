import { HomePage_1, HomePage_2, HomePage_3, HomePage_4, HomePage_5, HomePage_6, HomePage_7 } from "./Pages/Pages";


const Home = () => {
    const className = {
      container: "w-full font-Roboto text-white",
    };

    return(
        <div className={className.container}>
           <HomePage_1 />
           <HomePage_2 />
           <HomePage_3 />
           <HomePage_4 />
           <HomePage_5 />
           <HomePage_6 />
           <HomePage_7 />
        </div>
    )
}

export default Home;
