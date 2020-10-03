import { navigate } from "gatsby"
import React from "react"

const CookiesPage = () => {
    React.useEffect(() => {
        navigate('/legal/privacy#do-we-use-cookies-and-other-tracking-technologies')
    })
  
    return (
      <></>
    )
}

export default CookiesPage
