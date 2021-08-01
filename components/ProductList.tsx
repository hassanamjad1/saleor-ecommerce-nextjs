import { getNamedType } from "graphql" 
import styles from '../styles/Home.module.css'
import { useLatestProductsQuery } from "../generated/graphql"

const  LatestProducts = /* GraphQL */ `
query LatestProducts {
    products(first: 10, channel: "default-channel") {
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
    const { data,loading, error } = useLatestProductsQuery();

    if(loading) return <div>Loading....</div>

    if(error) return <div>Error! {error.message} </div>

    if(data) {
        const latestProducts = data.products.edges || [];

        return (
            <ul className="grid grid-cols-4 gap-4" >
                {latestProducts.map(({ node: { name,thumbnail }}) =>
                    <li>
                        
                        <img src={thumbnail.url} alt="" />
                        {/* <h2>{name}</h2> */}
                        {/* <div>
                            <p></p>
                        </div> */}

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