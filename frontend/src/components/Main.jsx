import Data from "../Data";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="row center">
          {Data.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                description={item.description}
                countInStock={item.countInStock}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;

// const Main = () => {
//     console.log(Data);
//     return(
//         // Data.map((item) => {
//         //     return(
//                 <Card
//                     key = {Data[0].id}
//                     // name = {Data[0].name}
//                     img = {Data[0].img}
//                     // rating = {Data[0].rating}
//                     // price = {Data[0].price}
//                 />
//             )
//         // })
//     // )
// }

// export default Main;
