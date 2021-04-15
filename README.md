# PROJECT CATWALK

### TABLE OF CONTENTS

1. [DESCRIPTION](#description)
2. [INSTALLATION](#installation)
3. [GETTING STARTED](#getting-started)
4. [MODULE DESCRIPTIONS](#module-descriptions)
5. [LICENSE](#license)
6. [ACKNOWLEDGEMENTS](#acknowledgements)


### Description <a name="description"></a>

<img src="./assets/videos/FEC_gif.gif" width="600" height="auto"/>
  Project Catwalk is an ecommerce, retail-centric website application. It updates our companies outdated, retail portal with a modernized, React-based client running on a lean express server. The application organizes and serves information regarding product details, related products, user looks, product question and anwers, and product reviews, as well as a product search feature.

### Installation <a name="installation"></a>
### Pre-Installation Requirements
    Node v14.15.1
    NPM v6.14.11
### Instructions
  - After cloning this repo, open your CLI within the root directory of this project and run 'npm install'.
  - Acquire a github personal access token for access to our API. Create a file in the root project directory named 'authorization.config.js'.
  Copy and paste the following code into the newly created file:
  ```
    module.exports = {
      token: <YOUR_TOKEN>
    }
  ```
  - Run 'npm react-dev' to bundle webpack. Webpack will watch for code changes automatically.

### Getting Started <a name="getting-started"></a>
  To run the server locally on your machine, run 'npm start' within the root directory.
  The server runs on PORT 3000 by default. Navigate to http://localhost:3000 to view the client.

### Module Descriptions <a name="module-descriptions"></a>

  Related Products Provides a list of scrollable cards that we think a user would be interested in. The component includes:
  - A table for comparing a related product to the current primary product. The table lists characterstics shared and unique to both products and is availble within a model on click.
  - A carousel of cards that move left and right on arrow clicks. Cards will scroll the exact width of a product card. Arrows will not display if not needed
  - A gallery of all product styles images available on hover of a card. These thumbnails will update the larger product card image on click.

  User Looks Prodives a Space for a user to save items to a carousel list of cards that persists through their session. Features include:
  - A card that adds a currently viewed product to the carousel on click
  - A delete card icon that removes a card from looks and the session on click
  - On page refresh, a user's looks will persists until the tab or window is closed.

### License <a name="license"></a>
  This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgements <a name="acknowledgements"></a>
  I'd like to express my deepest gratitude to Rob Lopez and Maia Ling for their feedback on this project.

  Additional Thanks To:
  Connie Tsai
  Daniel Kosykh
  Liem Nguyen


