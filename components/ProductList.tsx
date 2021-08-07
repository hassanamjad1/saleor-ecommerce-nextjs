import { getDescription, getNamedType } from "graphql"
import styles from '../styles/Home.module.css'
import { useLatestProductsQuery } from "../generated/graphql"

const LatestProducts = /* GraphQL */ `
query LatestProducts {
    products(first: 20, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
          thumbnail{
              url
          }
        }
      }
    }
  }

`
export function ProductList() {
    const { data, loading, error } = useLatestProductsQuery();

    if (loading) return <div>Loading....</div>

    if (error) return <div>Error! {error.message} </div>

    if (data) {
        const latestProducts = data.products.edges || [];

        return (
            <ul className="grid grid-cols-4 gap-7" >
                {latestProducts.map(({ node: { name, thumbnail, description } }) =>
                    <li className="bg-white">

                        <img src={thumbnail.url} />
                        {/* <h2>{name}</h2> */}
                        <div className="p-2 border-gray-100 border-t ">
                            <p className="block text-lg text-gray-900 truncate">{name}</p>
                            <p className="block text-sm font-medium text-gray-500 "> {description} </p>
                        </div>

                    </li>

                )}
            </ul>

        )
    }
}
                // {
                // latestProducts.map(( { node: { name } } ) =>
                //     <li>
                //         {name}
                //     </li>


        //)
   // } 
//}