import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    
    const [categories, setCategories] = useState(['Mr Robot']);

   


    return(
        <>
        <h2 className="title">GifExpertApp</h2>
        <div className="division">
        <AddCategory setCategories={setCategories} />
        <hr/>
        
        <ol>
            {
                categories.map( category=> 
                     < GifGrid
                      key={category}
                      category= {category}/>
                )
            }
        </ol>

       
        </div>



        </>

    )


}