import { Database } from "../../../Database/WholeData";

const Datas = Database.ContactData;
export const ContactPage_1 = () => {
    const className = {
        container: "w-full text-center p-32 bg-dark-gray",
        title: "text-3xl font-medium font-Playfair_Display"
    };

    const Data = Datas.page_1;

    return(
        <div className={className.container}>
            <h1 className={className.title}>
                {Data.title}
            </h1>
        </div>
    )
};


export const ContactPage_2 = () => {
    const className = {
      container:
        "w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center p-10",
      form: "w-full space-y-3 order-2 md:order-1",
      inlineForm: "w-full grid grid-cols-1 md:grid-cols-2 gap-5",
      input:
        "outline-none w-full rounded-lg bg-white/10 active:bg-white/30 py-3 px-5 placeholder-white/60 resize-none",
      button: "px-5 py-3 bg-[#037ef3] text-white rounded",
      innerBox: "space-y-5 order-1 md:order-2",
      list: "flex items-center gap-5",
      icon: "p-5 rounded-full border border-white"
    };

    const Data = Datas.page_2

    return(
        <div className={className.container}>
            <form className={className.form} action={Data.submit.link}>
                <div className={className.inlineForm}>
                    {Data.forms1.map((data, idx) => (
                        <input type={data.type} placeholder={data.placeholder} className={className.input} key={idx}/>
                    ))}
                </div>

                <input type={Data.form2.type} placeholder={Data.form2.placeholder} className={className.input}/>

                <textarea placeholder={Data.form} className={`${className.input} h-[300px]`}/>
                <button className={className.button} type="submit">
                    {Data.submit.title}
                </button>
            </form>

            <div className={className.innerBox}>
                {Data.lists.map((data, idx) => (
                    <div key={idx} className={className.list}>
                        <div className={className.icon}>
                            {data.icon}
                        </div>
                        <p className={className.paragraph}>
                            {data.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export const ContactPage_3 = () => {
    const className = {
        container: "w-full h-[400px] border-0",
    };


    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1419412996843!2d106.89936520808357!3d-6.375670693587949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed4515088551%3A0x5e89bf86511886e2!2sTrans%20Studio%20Mall%20Cibubur!5e0!3m2!1sen!2sid!4v1692895168701!5m2!1sen!2sid"
        allowFullScreen=""
        className={className.container}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
}