import React from 'react'
export default function List()
{
    const college=[{id:1, stuName:"sushma", age:18},
            {id:2, stuName:"sarayu", age:18},
            {id:3, stuName:"saru", age:19},
            {id:4, stuName:"sara", age:19},
            {id:5, stuName:"sush", age:18},]
        
            const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
            return(
                <div>
                    <h1>List of Students</h1>
                    {display}
                </div>
            )
}