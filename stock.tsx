import { useState , useEffect} from 'react';
import { Text, View } from 'react-native';


export default function StockList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://lager.emilfolino.se/v2/products?api_key=26f91833974834039691192f30e32237")
    .then(response => response.json())
    .then(result => setPosts(result.data));
}, []);

  const listOfPosts = posts.map((post, index) => {
    return <Text key={index}
    style={{fontSize:40,
        marginBottom:32}}>
        {post.name}:{post.stock}</Text>
})

  return (
    <View>
      {listOfPosts}
    </View>
  );
}

