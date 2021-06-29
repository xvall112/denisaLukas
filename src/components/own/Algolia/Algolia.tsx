import React, { createElement } from "react"
import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from "algoliasearch"
import Autocomplet from "./components/Autocomplet"
import ProductItem from "./components/ProductItem"
import "@algolia/autocomplete-theme-classic"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_ADMIN_KEY
)

function Algolia() {
  return (
    <div className="app-container">
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
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />
              },
            },
          },
        ]}
      />
    </div>
  )
}

export default Algolia
