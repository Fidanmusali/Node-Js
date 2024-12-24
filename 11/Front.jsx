import React, { useEffect } from 'react'

const front = () => {
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        axios.get("/admin", {
            headers: {
                'Authorization': `barer ${token}`
            }
        }).then((data) => {
            console.log(data);
        })
    }, [])
    return (
        <div>front</div>
    )
}

export default front