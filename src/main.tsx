import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import { ConfigProvider } from 'antd';

// 国际化
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

import './index.less'

import routes from '~react-pages'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'

library.add(fas, far)

// eslint-disable-next-line no-console
console.log(routes)

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Router>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Router>
  </StrictMode>,
)
