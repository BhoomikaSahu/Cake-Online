import Data from '../Data'
import Card from './Card'

const Main = () => {
    return(
        <>
            <div className="main">
                <div className="row center">
                    {
                        Data.map(item => {
                            return(
                                <Card 
                                    key = {item.id}
                                    img = {item.img}
                                    brand = {item.brand}
                                    price = {item.price}
                                    rating = {item.rating}
                                    reviews = {item.reviews}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Main;


// const Main = () => {
//     console.log(Data);
//     return(
//         // Data.map((item) => {
//         //     return(
//                 <Card 
//                     key = {Data[0].id}
//                     // brand = {Data[0].brand}
//                     img = {Data[0].img}
//                     // rating = {Data[0].rating}
//                     // price = {Data[0].price}
//                 />
//             )
//         // })
//     // )
// }

// export default Main;