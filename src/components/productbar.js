import React ,{useState} from 'react';
import './productbar.css';
import no1 from '../images/banana.png';
import no2 from '../images/strawb.png';
import no3 from '../images/yog.png';
import no4 from '../images/bb.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import {useDispatch, useSelector} from 'react-redux' ;


const Productbar = () => {

    const [added1,setAdded1] = useState(false);
    const [added2,setAdded2] = useState(false);
    const [added3,setAdded3] = useState(false);
    const [added4,setAdded4] = useState(false);
    const [added5,setAdded5] = useState(false);
    const [added6,setAdded6] = useState(false);
    const [added7,setAdded7] = useState(false);
    const [added8,setAdded8] = useState(false);
    const [added9,setAdded9] = useState(false);
   

const dispatch=useDispatch();
  const count=useSelector(state=>state.count);

  

    return (
        
            <div className='full'>
                <div className='single' id='1'>
                    <img src={no1} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    

                    { !added1 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded1(!added1);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded1(!added1);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>Banana</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='2'>
                    <img src={no2} style={{height:'160px',padding:'20px 5px'}} alt='img' />


                    { !added2 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded2(!added2);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded2(!added2);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>StrawBerry</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='3'>
                    <img src={no3} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added3 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded3(!added3);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded3(!added3);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>Yogurt</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='4'>
                    <img src={no4} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added4 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded4(!added4);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded4(!added4);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>BlackBerry</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='5'>
                    <img src={no2} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added5 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded5(!added5);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded5(!added5);
                            }}/> }


                    <h2 style={{padding:'10px'}} >$0.69</h2>
                    <h3 style={{padding:'10px'}} >StrawBerry</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='6'>
                    <img src={no3} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added6 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded6(!added6);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded6(!added6);
                            }}/> }


                    <h2 style={{padding:'10px'}} >$0.69</h2>
                    <h3 style={{padding:'10px'}} >Yogurt</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='7'>
                    <img src={no1} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added7 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded7(!added7);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded7(!added7);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>Banana</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='8'>
                    <img src={no4} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    

                    { !added8 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded8(!added8);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded8(!added8);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>BlackBerry</h3>
                    <h6>...</h6>
                </div>
                <div className='single' id='9'>
                    <img src={no2} style={{height:'160px',padding:'20px 5px'}} alt='img' />
                    
                    { !added9 ?
                    <img src={plus} style={{height:'60px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                    onClick={()=>{
                        dispatch({type:'ADD_ONE_TO_COUNTER'});
                        setAdded9(!added9);
                        }}/> :
                        <img src={minus} style={{height:'50px',position:'absolute',top:'120px',left:'100px'}} alt='img' 
                        onClick={()=>{
                            dispatch({type:'CUT_ONE_TO_COUNTER'});
                            setAdded9(!added9);
                            }}/> }


                    <h2 style={{padding:'10px'}}>$0.69</h2>
                    <h3 style={{padding:'10px'}}>StrawBerry</h3>
                    <h6>...</h6>
                </div>
            </div>
        
    );
}

export default Productbar;
