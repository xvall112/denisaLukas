import React, { createElement } from "react"
import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from "algoliasearch"
import Autocomplet from "./components/Autocomplet"
import ProductItem from "./components/ProductItem"
import "@algolia/autocomplete-theme-classic"
import Title from "../../own/titleSection"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_ADMIN_KEY
)

function Algolia() {
  return (
    <div className="app-container">
      <Title title={"Hledat"} link={"/search"} />
      <Autocomplet
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "FaithInTravel",
                    query,
                  },
                ],
              })
            },
            templates: {
              header() {
                return <h2>Faith in Travel</h2>
              },
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />
              },
              noResults() {
                return <h3>Tudy cesta nevede, zkuste vyhledat něco jiného</h3>
              },
            },
          },
        ]}
      />
    </div>
  )
}

export default Algolia
