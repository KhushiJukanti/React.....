import React from 'react'
import Props2 from './props2'

let user = {
    name: "khushi",
    email: "khushi@gmail.com"
}



const Props = () => {
    return (


        <Props2 email={user.email} name={user.name} />



    )


}
export default Props




