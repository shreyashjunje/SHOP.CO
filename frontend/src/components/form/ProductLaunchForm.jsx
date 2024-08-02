import React from 'react'

const ProductLaunchForm = () => {
  return (
    <div>
        <h2>this is Product submit form</h2>

        <form>
            <label>
                title
            <input 
            type="text"
            name='title'
            placeholder='enter the title'
            {...register("title",{required:true})}

            />
             {
                            errors.title&&(
                                <span>
                                    please enter the title
                                </span>
                            )
                        }
            </label>
           
           <button >send</button>

        </form>
    </div>
  )
}

export default ProductLaunchForm