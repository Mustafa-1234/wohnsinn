import React from 'react'
import {
  CButton,
  CCol,
  CRow,
} from '@coreui/react'
//import CIcon from '@coreui/icons-react'
import userData from './data.json'
import style from './Test.module.css'

//import MainChartExample from '../charts/MainChartExample.js'

//const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
//const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Test = () => {
  return (
    <>       
        {userData.map((data, key) => {
          return (   
          <CRow className={style.whiteBackground} key={key}>         
            <CCol lg="2">
              <img src= {data.image} />
            </CCol>               
            <CCol lg="8">
              <p>{data.name} {data.age}</p>
              <p>{data.occupation}</p>
              <p>{data.salary}</p>
            </CCol>
            <CCol lg="2">
              <CButton color="success" className={style.button}>Login</CButton>
            </CCol> 
          </CRow>  
          );
        })}
    </>
  )
}

export default Test
