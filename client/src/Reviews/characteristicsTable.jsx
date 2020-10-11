import React from 'react';
import Table from 'react-bootstrap/Table';

const CharacteristicsTable = () => {
  return (
    <Table size="sm" id="table">
      <thead>
        Size Chart:
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Size</td>
          <td>A size too small</td>
          <td>½ a size too small</td>
          <td>Perfect</td>
          <td>½ a size too big</td>
          <td>A size too wide</td>
        </tr>
        <tr>
          <td>Width</td>
          <td>Too narrow</td>
          <td>Slightly narrow</td>
          <td>Perfect</td>
          <td>Slightly wide</td>
          <td>Too wide</td>
        </tr>
        <tr>
          <td>Comfort</td>
          <td>Uncomfortable</td>
          <td>Slightly uncomfortable</td>
          <td>Ok</td>
          <td>Comfortable</td>
          <td>Perfect</td>
        </tr>
        <tr>
          <td>Quality</td>
          <td>Poor</td>
          <td>Below average</td>
          <td>What I expected</td>
          <td>Pretty great</td>
          <td>Perfect</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>Runs Short</td>
          <td>Runs slightly short</td>
          <td>Perfect</td>
          <td>Runs slightly long</td>
          <td>Runs long</td>
        </tr>
        <tr>
          <td>Fit</td>
          <td>Runs tight</td>
          <td>Runs slightly tight</td>
          <td>Perfect</td>
          <td>Runs slightly long</td>
          <td>Runs long</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CharacteristicsTable;