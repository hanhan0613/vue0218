import { reactive } from 'vue'
import axios from 'axios'

export default function () {
    //数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/terrier-american/n02093428_10071.jpg',
    ])
    //方法
    async function getDog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(res.data.message)
        } catch (error) {
            alert(error)
        }
    }
    //向外部提供数据
    return {
        dogList,
        getDog
    }
}