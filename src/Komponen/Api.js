import react, {useState, useEffect} from 'react'
import axios from 'axios'


function API () {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
       axios.get('https://raw.githubusercontent.com/Bimbiiim/API_JSON/main/Artikel2.json')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (

        
    <div>
  
        <ul>
            {
                posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>

    </div>
    
   )

}

export default API