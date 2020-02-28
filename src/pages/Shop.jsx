import React from 'react'
import ShopShoes from '../components/layout/body/ShopShoes'
import YellowShop from '../components/layout/body/YellowShop'

const Shop = () => {
    return (
        <div className="container-fluid noMP">
            <article className="row noMP">
                <section className="col-lg-3 col-12 noMP">
                    <YellowShop />
                </section>
                <section className="col-lg-9 col-12 noMP">
                    <ShopShoes />
                </section>
            </article>
        </div>
    )
}

export default Shop
