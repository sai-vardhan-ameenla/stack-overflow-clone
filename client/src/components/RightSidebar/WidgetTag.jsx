import React from 'react'

const WidgetTag = () => {
    const tags =['c','css','express' ,'firebase','html','java','javascript','mem','mongodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div className='widget-tags'>
        <h3>Watched rags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tags)=>(
                    <p key={tags}>{tags}</p>
                ))
            }
        </div>
      
    </div>
  )
}

export default WidgetTag
