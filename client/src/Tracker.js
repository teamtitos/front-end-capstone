import React from 'react';
import axios from 'axios';
const apiURL = 'http://18.224.37.110';

function Tracker(Component) {

  return class extends React.Component {

    componentDidMount() {
      this.trackClicks();
    }

    saveElement(e) {
      let element =  e.srcElement.outerHTML.toString().split('>');
      return element[0] + '>';
    }

    postInteraction(obj) {
      axios.post(`${apiURL}/interactions`, obj)
        .then(res => {
          console.log('created');
        })
        .catch(err => {
          console.error('There was an error posting the interaction');
        })
    }

    trackClicks() {
      let time = new Date().toLocaleString();
      let data = {
        time: time
      };

      window.addEventListener('click', (e) => {

        let productView = document.querySelector('.productViewRow');
        let relatedProductsView = document.querySelector('.relatedProducts');
        let reviewsView = document.querySelector('.reviews');

        if (productView.contains(e.target)) {
          data["element"] = this.saveElement(e);
          data["widget"] = 'Product Overview';
        }

        if(relatedProductsView.contains(e.target)) {
          data["element"] = this.saveElement(e);
          data["widget"] = 'Related Products';
        }

        if(reviewsView.contains(e.target)) {
          data["element"] = this.saveElement(e);
          data["widget"] = 'Reviews';
        }

        this.postInteraction(data);

      })

    }


    render() {
      return (
        <Component />
      );
    }
  }
}

export default Tracker;

