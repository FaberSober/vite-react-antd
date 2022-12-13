import React, {useState} from 'react';
import * as fas from '@fortawesome/free-solid-svg-icons'
import * as far from '@fortawesome/free-regular-svg-icons'
import * as fab from '@fortawesome/free-brands-svg-icons'
import {each} from 'lodash'
import {Radio} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


console.log(fas)
const listSolid = new Set();
each(fas, i => {
  if (i.iconName === 'angles-down') {
    console.log(i)
  }
  if (i.iconName) {
    listSolid.add(i.iconName)
  }
})

const listRegular = new Set();
each(far, i => {
  if (i.iconName) {
    listRegular.add(i.iconName)
  }
})

const listBrand = new Set();
each(fab, i => {
  if (i.iconName) {
    listBrand.add(i.iconName)
  }
})


/**
 * @author xu.pengfei
 * @date 2022/12/13 21:49
 */
export default function all() {
  const [prefix, setPrefix] = useState<string>('solid')

  return (
    <div >
      <Radio.Group value={prefix} onChange={(e) => setPrefix(e.target.value)}>
        <Radio value="solid">solid</Radio>
        <Radio value="regular">regular</Radio>
        <Radio value="brands">brands</Radio>
      </Radio.Group>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {prefix === 'solid' && Array.from(listSolid).map(i => (
          <div key={i} style={{ margin: 12 }}>
            <FontAwesomeIcon icon={`fa-solid fa-${i}`} size="2x" />
          </div>
        ))}
        {prefix === 'regular' && Array.from(listRegular).map(i => (
          <div key={i} style={{ margin: 12 }}>
            <FontAwesomeIcon icon={`fa-solid fa-${i}`} size="2x" />
          </div>
        ))}
        {prefix === 'brands' && Array.from(listBrand).map(i => (
          <div key={i} style={{ margin: 12 }}>
            <FontAwesomeIcon icon={`fa-brands fa-${i}`} size="2x" />
          </div>
        ))}
      </div>
    </div>
  )
}
