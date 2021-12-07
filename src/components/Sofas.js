import React from "react";
import SofaItem from "./SofaItem";

const Sofas = () => {
    const img1 = "https://hivemodern.com/public_resources/full/morgan-sofa-150-niels-bendtsen-bensen-1.jpg"
    const img2 = "https://www.consejosparamihuerto.com/wp-content/uploads/2020/02/sofas-150-cm.jpg"
    const img3 = "https://tse2.mm.bing.net/th?id=OIP.Ws2LV9wknXz9I0kdvX5BhQHaIO&pid=Api&P=0&w=300&h=300"
    return(
        <section >
                <div className="row gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                    <SofaItem imgsrc={img1} />
                    <SofaItem imgsrc={img2} />
                    <SofaItem imgsrc={img3} />
                </div>
        </section>
    );
}

export default Sofas;