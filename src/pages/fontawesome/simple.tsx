import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Space} from "antd";


/**
 * @author xu.pengfei
 * @date 2022/12/13 21:25
 */
export default function simple() {
  return (
    <div>
      <p>@fortawesome/free-solid-svg-icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-check-square" size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-check-square" size="4x" />
      </Space>

      <p>@fortawesome/free-regular-svg-icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-regular fa-circle" size="4x" />
      </Space>

      <p>Rotate and Flip Icons</p>
      <p>Rotate</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" rotation={90} size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" rotation={180} size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" rotation={270} size="4x" />
      </Space>

      <p>Flip</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" flip="horizontal" size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" flip="vertical" size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" flip="both" size="4x" />
      </Space>

      <p>Animate Icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-heart" beat size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-circle-info" beatFade size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-basketball" bounce size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" fade size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-compact-disc" flip size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-bell" shake size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-cog" spin size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-compass" spin spinReverse size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-spinner" spinPulse size="4x" />
      </Space>

      <p>Bordered Icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" border size="4x" />
      </Space>

      <p>Pulled Icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" pull="left" size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" pull="right" size="4x" />
      </Space>

      <p>Power Transforms</p>
      <Space>
        /* Use basic utilites */
        <FontAwesomeIcon icon="fa-solid fa-coffee" transform="shrink-6 left-4" size="4x" />

        /* Or computed */
        <FontAwesomeIcon icon="fa-solid fa-coffee" transform={{ rotate: 42 }} size="4x" />
      </Space>

      <p>Mask</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" mask="fa-regular fa-circle" size="4x" />
      </Space>

      <p>Duotone Icons</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" symbol size="4x" />
        <FontAwesomeIcon icon="fa-solid fa-coffee" symbol="beverage-icon" size="4x" />
      </Space>

      <p>Layer Icons</p>
      <Space>
        <span className="fa-layers fa-fw fa-lg">
          <FontAwesomeIcon icon="fa-solid fa-circle" size="4x" />
          <FontAwesomeIcon icon="fa-solid fa-check" transform="shrink-6" inverse size="4x" />
        </span>
      </Space>

      <p>Invert the Icon Color to White</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-coffee" inverse size="4x" />
      </Space>

      <p>Add Your Own CSS Classes</p>
      <Space>
        <FontAwesomeIcon icon="fa-solid fa-spinner" className="highlight" size="4x" />
      </Space>
    </div>
  )
}

