import React from 'react'
import './ShopShoes.scss';
import ShoeOne from '../../../images/shoe_01.jpg';
import ShoeTwo from '../../../images/shoe_02.jpg';
import ShoeThree from '../../../images/shoe_03.jpg';
import ShoeFour from '../../../images/shoe_04.jpg';

const ShopShoes = () => {
    return (
        <div>
            <h2 id="shopHeadline">SHOP</h2>
            <div id="boxPadding">
                <article className="row noMP">
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeOne} alt="Shoe 1" title="Shoe 1" className="img-fluid" />
                            <figcaption>
                                <p>Puma Highland 3000 - brown</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeTwo} alt="Shoe 2" title="Shoe 2" className="img-fluid" />
                            <figcaption>
                                <p>Asics Free Street</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeThree} alt="Shoe 3" title="Shoe 3" className="img-fluid" />
                            <figcaption>
                                <p>New Balance Runner Bounce</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeFour} alt="Shoe 4" title="Shoe 4" className="img-fluid" />
                            <figcaption>
                                <p>New Balance New York 2018</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeOne} alt="Shoe 1" title="Shoe 1" className="img-fluid" />
                            <figcaption>
                                <p>Puma Highland 3000 - brown</p>
                            </figcaption>
                        </figure>
                    </section>
                    <section className="col-lg-4 col-12 noMP">
                        <figure className="shoeBox">
                            <img src={ShoeFour} alt="Shoe 4" title="Shoe 4" className="img-fluid" />
                            <figcaption>
                                <p>New Balance New York 2018</p>
                            </figcaption>
                        </figure>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default ShopShoes
