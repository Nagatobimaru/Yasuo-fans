import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {CChartPie} from "@coreui/react-chartjs";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardBody>
              <CChartPie
                  type="pie"
                  datasets={[
                    {
                      backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16'
                      ],
                      data: [40, 20, 100, 10]
                    }
                  ]}
                  labels={['BTC', 'ETH', 'LTC', 'USDT']}
                  options={{
                    tooltips: {
                      enabled: true
                    }
                  }}
              />
              </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
