import NavBar from "../components/NavBar/NavBar"
import Link from "next/link"

const Cars = ({cars}: any) => {
  console.log(cars)

  return (
    <div>
        <NavBar />
        <h1>Cars</h1>
        {
            cars.map((c: any) => <div key={c.id}><Link href={`/cars/${c.id}`}>{c.company}</Link></div>)
        }
    </div>
  )
}

export async function getStaticProps(context: any) {
    const response = await fetch('http://localhost:3000/cars');
    const data = await response.json();
  
    return {
        props: {
          cars: data
        },
        revalidate: 10
    }
}



export default Cars