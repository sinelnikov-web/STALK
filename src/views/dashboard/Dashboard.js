import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cifRu,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const [currentUser, setCurrentUser] = useState(null)

  const openUserModal = (user) => {
    setCurrentUser(user)
  }

  const closeUserModal = () => setCurrentUser(null)

  useEffect(() => {
    const usersSaved = localStorage.getItem('users')
    dispatch({ type: 'init', users: usersSaved ? JSON.parse(usersSaved) : [] })
  }, [])

  console.log({ users })

  return (
    <>
      {/* <WidgetsDropdown className="mb-4" /> */}
      {/* <WidgetsBrand className="mb-4" withCharts /> */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Statistics</CCardHeader>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Кандидат</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Соответствие</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Последняя активность
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((item, index) => (
                    <CTableRow
                      onClick={() => openUserModal(item)}
                      v-for="item in tableItems"
                      key={index}
                    >
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={'https://placehold.in/100x100@2x.png'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.username}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={cifRu} title={'Russia'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.rating}%</div>
                        </div>
                        <CProgress
                          thin
                          color={
                            item.rating > 60 ? 'success' : item.rating > 40 ? 'warning' : 'danger'
                          }
                          value={item.rating}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last Activity</div>
                        <div className="fw-semibold text-nowrap">
                          {new Date(item.lastActivity).toLocaleTimeString()}
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal onClose={closeUserModal} visible={currentUser} fullscreen>
        <CModalHeader>
          <CModalTitle>Кандидат: {currentUser?.username}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <h2>Короткая сводка:</h2>
            <CCol md={6} className="d-flex">
              <CCallout color="light" className="flex-grow-1">
                <h3>Соответствие вакансии:</h3>
                <div className="d-flex justify-content-between text-nowrap">
                  <div className="fw-semibold">{currentUser?.rating}%</div>
                </div>
                <CProgress
                  thin
                  color={
                    currentUser?.rating > 60
                      ? 'success'
                      : currentUser?.rating > 40
                        ? 'warning'
                        : 'danger'
                  }
                  value={currentUser?.rating}
                />
              </CCallout>
            </CCol>
            <CCol md={6} className="d-flex">
              <CCallout color="light" className="flex-grow-1">
                <h3>Рекоммендуемая позиция:</h3>
                <p>
                  {currentUser?.recommended_position} (
                  {Intl.NumberFormat('ru').format(currentUser?.salary)} руб.)
                </p>
              </CCallout>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={12}>
              <CCallout color="primary">
                <h3>Комментарий:</h3>
                <p>{currentUser?.comment}</p>
              </CCallout>
            </CCol>
          </CRow>
          <CRow></CRow>
          <CRow>
            <CCol md={6} className="d-flex">
              <CCallout color="success">
                <h3>Положительные стороны:</h3>
                <p>{currentUser?.commentToSkillPositive}</p>
              </CCallout>
            </CCol>
            <CCol md={6} className="d-flex">
              <CCallout color="danger">
                <h3>Отрицательные стороны:</h3>
                <p>{currentUser?.commentToSkillNegative}</p>
              </CCallout>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={12}>
              <CCallout color="warning">
                <h3>Рекоммендации кандидату:</h3>
                <p>{currentUser?.recommend}</p>
              </CCallout>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeUserModal}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Dashboard
