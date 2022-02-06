import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

const List = () =>{
    const [isMoved,setIsMoved] = useState(false)
    const [sliderNumber,setSliderNumber] = useState(0)

    const listRef = useRef()

const handleClick = direction =>{
setIsMoved(true)
 let distance = listRef.current.getBoundingClientRect().x - 50

    if(direction === 'left' && sliderNumber>0) {
        setSliderNumber(sliderNumber-1)
    listRef.current.style.transform = `translateX(${250 + distance}px)`
    }

    if(direction==='right' && sliderNumber<4){
        setSliderNumber(sliderNumber+1)
         listRef.current.style.transform = `translateX(${-250 + distance}px)`
    }
} 

    return(
<div className="list">
    <span className="listTitle">Continue to watch</span>
    <div className="wrapper">
        {isMoved &&  <ArrowBackIosNewOutlined
        className='arrow left' onClick={()=>handleClick('left')} 
        />}
       
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
        </div>
    
      <ArrowForwardIosOutlined className='arrow right' onClick={()=>handleClick('right')}/>

  </div>
</div>
  )
}

export default List