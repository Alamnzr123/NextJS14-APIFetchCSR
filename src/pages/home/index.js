import React from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = React.useState();

    async function handleSubmit() {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        setData(res.data);
    }
    return (
        <>
            You can fetch Data Just Click this Button!
            <br />
            <button onClick={() => handleSubmit()}>Submit</button>
            {console.log(data)}
            {
                // ? Use the safe navigation operator ( ?. ) to replace explicit, sequential checks for null references.
                // data.map && data.map or data?.map
                data?.map((item, index) => (
                    <div style={{ color: 'white' }} key={index} >
                        {`ID ${item.id}`}
                        {`Name ${item.name}`}
                    </div>
                ))
            }

        </>
    )
}

export default Home