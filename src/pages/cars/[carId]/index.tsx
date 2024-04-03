import NavBar from "@/pages/components/NavBar/NavBar";

const carDetails = ({car}: any) => {
//   console.log(car)

  return (
    <>
        <NavBar />
        <div>
            <h1>Car Details</h1>
            <h2>{car.company}</h2>
            <h3>{car.model}</h3>
            <p>{car.price}$</p>
        </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
    const {params} = context;
    const response = await fetch(`http://localhost:3000/cars/${params.carId}`);
    const data = await response.json();
    
    return {
        props: {
            car: data
        }
      }
  }

//   export async function getStaticPaths(context: any) {
//     const {params} = context;
//     const response = await fetch(`https://localhost:3000/cars`);
//     const data = await response.json();

//     const paths = data.map((c) => ({
//         params: { id: `${c.id}` },
//       }))
     
//       // We'll pre-render only these paths at build time.
//       // { fallback: 'blocking' } will server-render pages
//       // on-demand if the path doesn't exist.
//     return { paths, fallback: 'blocking' }
// }


export default carDetails