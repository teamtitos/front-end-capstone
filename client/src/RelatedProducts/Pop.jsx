import React from 'react';

const Pop = ({product, current}) => {
  let checkmark = <span style={{all: "unset"}}>&#10003;</span>;
  let features = [];
  product.features.map(feature => (features.push({'product': feature})))
  current.features.map((feature) => {
    features.push({'current' : feature});
  })
  //Rendering by rows
  let rows = features.map((obj, index) => {
    console.log(obj, '<-obj');
    let product = '';
    let current = '';
    let feature = null;
    let value = null;
    if (obj['current']) {
      current = checkmark;
      value = obj.current.value ? obj.current.value : '';
      feature = `${obj.current.feature} ${value}`;
    } else {
      value = value ? obj.current.value : '';
      product = checkmark;
      feature = `${obj.product.feature} ${value}`;
    }
    return (
      <tr>
      <td className="left">{product}</td>
      <td>{feature}</td>
      <td className="right">{current}</td>
      </tr> 
      )
  })

  return (    
    <div id="popoverall">
      <h6 className="tabletitle font-weight-light">COMPARING</h6>
      <table id="mytable" className="table table-borderless">
      <thead>
        <tr>
          <th className="product">{product.name}</th>
          <th>FEATURES</th>
          <th className="product">{current.name}</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
      </div>

  )
}

export default Pop;