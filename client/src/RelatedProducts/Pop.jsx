import React from 'react';
import Popover from 'react-bootstrap/Popover';

const Pop = () => {
  // MIGHT HAVE TO MAKE A GET REQUEST FOR THE CHARACTERISITS???
  let checkmark = <span style={{all: "unset"}}>&#10003;</span>;

  return (
    
    <div id="popoverall">
    {/*Here a PopOver table Pop Up that compares two products*/}
      <h6 className="tabletitle font-weight-light">COMPARING</h6>
      <table id="mytable" className="table table-borderless">
      <thead>
        <tr>
          <th className="product">Product Short Name</th>
          <th>details</th>
          <th className="product">Product Short Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="left">{checkmark}</td>
          <td>made without slave work</td>
          <td className="right">&#10003;</td>
        </tr>
        <tr>
          <td className="left"> </td>
          <td>made with real cotton</td>
          <td className="right">&#10003;</td>
        </tr>
        <tr>
          <td className="left"> </td>
          <td>has ultimate freshness</td>
          <td className="right">&#10003;</td>
        </tr>
        <tr>
          <td className="left">&#10003;</td>
          <td>quality guarenteed</td>
          <td className="right" >&#10003;</td>
        </tr>
        <tr>
          <td className="left bold">&#10003;</td>
          <td>coolest thing you ever seen</td>
          <td className="right">&#10003;</td>
        </tr>
      </tbody>
    </table>

      </div>

  )
}

export default Pop;