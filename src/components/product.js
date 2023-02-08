import React, { useRef } from 'react';
import './product.css';
//import Categorybar from './categorybar';
//import Productbar from './productbar';
import { Button } from 'react-bootstrap';
import img1 from '../images/Vector1.png';
import img2 from '../images/Vector2.png';
import img3 from '../images/Vector3.png';
import img4 from '../images/Vector4.png';
import img5 from '../images/Vector5.png';
import Produce from './produce';
import Dairy from './dairy';
import Meat from './meat';
import Canned from './canned';
import Frozen from './frozen';
import Prepared from './prepared';
import Bakery from './bakery';


const Product = () => {

    const pro = useRef(null);
    const dairy = useRef(null);
    const meat = useRef(null);
    const canned = useRef(null);
    const frozen = useRef(null);
    const prepare = useRef(null);
    const bakery = useRef(null);




    const handleProd = ()=>{
        pro.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleDairy = ()=>{
        dairy.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleMeat = ()=>{
        meat.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleCanned = ()=>{
        canned.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleFrozen = ()=>{
        frozen.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handlePrepare = ()=>{
        prepare.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleBakery = ()=>{
        bakery.current?.scrollIntoView({behaviour:'smooth'});
    }

    

    return (
        <div className='prod'>
            <div className='sidebar'>
            <div>
            <img src={img1} className='mob' alt='a' />
            <Button className='btn active' variant="primary" onClick={handleProd}>Produce</Button>{' '}
            </div>
            <div>
            <img src={img2} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handlePrepare}>Prepared foods</Button>{' '}
            </div>
            <div>
            <img src={img3} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleCanned}>Canned food and soups</Button>{' '}
            </div>
            <div>
            <img src={img4} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleProd}>Produce</Button>{' '}
            </div>
            <div>
            <img src={img5} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
            </div>
            <div>
            <img src={img1} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
            </div>
            <div>
            <img src={img2} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleFrozen}>Frozen</Button>{' '}
            </div>
            <div>
            <img src={img3} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleMeat}>Meat</Button>{' '}
            </div>
            <div>
            <img src={img4} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
            </div>
            <div>
            <img src={img5} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
            </div>
            <div>
            <img src={img5} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleProd}>Produce</Button>{' '}
            </div>
            <div>
            <img src={img1} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
            </div>
            <div>
            <img src={img2} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleFrozen}>Frozen</Button>{' '}
            </div>
            <div>
            <img src={img3} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleMeat}>Meat</Button>{' '}
            </div>
            <div>
            <img src={img4} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
            </div>
            <div>
            <img src={img5} className='mob' alt='a' />
            <Button className='btn' variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
            </div>
           
             
             
             
        </div> 
            <div className='combine'>
                <section id='prod1'>
                    <Produce ref={pro} text="Produce >"/>
                </section>
                <section id='prepare1'>
                    <Prepared ref={prepare} text="Prepared Foods >" />
                </section>
                <section id='canned1'>
                    <Canned ref={canned} text="Canned Foods and Soups >" />
                </section>
                <section id='prod2'>
                    <Produce ref={pro} text="Produce >"/>
                </section>
                <section id='bakery1'>
                    <Bakery ref={bakery} text="Bakery >" />
                </section>
                <section id='dairy1'>
                <Dairy ref={dairy} text="Dairy and Eggs >"/>
                </section>
                <section id='frozen1'>
                <Frozen ref={frozen} text="Frozen >" />
                </section>
                <section id='meat1'>
                <Meat ref={meat} text="Meat >" />
                </section>
                <section id='dairy2'>
                <Dairy ref={dairy} text="Dairy and Eggs >"/>
                </section>
                <section id='bakery2'>
                    <Bakery ref={bakery} text="Bakery >" />
                </section>
                <section id='prod3'>
                    <Produce ref={pro} text="Produce >"/>
                </section>
                <section id='dairy3'>
                <Dairy ref={dairy} text="Dairy and Eggs >"/>
                </section>
                <section id='frozen'>
                <Frozen ref={frozen} text="Frozen >" />
                </section>
                <section id='meat1'>
                <Meat ref={meat} text="Meat >" />
                </section>



                
            </div>
        </div>
    );
}

export default Product;
