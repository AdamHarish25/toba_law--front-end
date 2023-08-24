import { ServicePage_1, ServicePage_2 } from "./Pages/Pages";

const Service = () => {
    const className = {
      container: "w-full font-Roboto text-white",
    };

    return (
        <div className={className.container}>
            <ServicePage_1 />
            <ServicePage_2 />
        </div>
    )
}

export default Service;