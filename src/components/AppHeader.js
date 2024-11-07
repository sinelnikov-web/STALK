import React, { Fragment, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton,
  useColorModes,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CCol,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CRow,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CFormLabel,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
  cilUserPlus,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import axios from 'axios'

const AppHeader = () => {
  const [newCandidateModalVisible, setNewCandidateModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const headerRef = useRef()
  const formRef = useRef()
  const users = useSelector((state) => state.users)
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const closeModal = () => !isLoading && setNewCandidateModalVisible(false)
  const openModal = () => setNewCandidateModalVisible(true)

  const onSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.target)
    const body = Object.fromEntries(formData)
    const reqBody = {
      cv: body.cv,
      vacancy: body.vacancy,
      socials: {
        leetcode: body.leetcode,
        codeforces: body.codeforces,
        github: body.github,
        stepik: body.stepik,
      },
    }

    axios.post('http://195.54.32.63:8080/analyze-cv/', reqBody).then((res) => {
      const { leetcode, codeforces, github, stepik } = reqBody.socials
      res.data.username = github || leetcode || codeforces || stepik || `User #${users.length + 1}`
      res.data.lastActivity = Date.now() + Math.random() * 10e5
      dispatch({ type: 'add-user', user: res.data })
      setIsLoading(false)
      closeModal()
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  const cv =
    'Полная занятость Полный день, Гибкий график, Удаленная работа Готов к командировкам Образование: Высшее Общий стаж: 3 года Опыт работы Ноябрь 2022 — Июль 2024 1 год 8 месяцев ЦБС Выборгского района Санкт-Петербург, www.cbsvib.ru/ Frontend developer Разработка корпоративного портала "Скрепка" - Разработка форм - Разработка графиков и диаграмм - Разработка библиотеки UI-компонентов (сложные селекты, таблицы, календари) - Работа с WebSocket (мгновенная подгрузка данных на графики и в таблицы, чат) - Внедрение системы прав доступа, авторизация - Обновление актуальной версии проекта на сервере, работа с Git и Bash Стек: Vue 2, Nuxt 2, Vuex, Bootstrap, HTML, CSS, JS, REST API, WebSocket, Chart.js, БЭМ, Git, Jira Разработка сайта - Доработка старых модулей и создание новых по макетам из Figma - Кроссбраузерная, адаптивная верстка, pixel perfect, анимации - Разработка библиотеки UI-компонентов (Слайдеры, карточки, селекты) - Производил миграцию проекта на более актуальный стек Стек: (Слеш указывает на миграцию) Vue 2/Vue 3 Nuxt 2/Nuxt 3 Javascript/Typescript Vuex/Pinia HTML, CSS, Vuetify, REST API, БЭМ, Git, Jira Август 2021 — Ноябрь 2022 1 год 3 месяца Индивидуальное предпринимательство / частная практика / фриланс Санкт-Петербург Frontend-разработчик Разработка лендингов, совместно с дизайнером для заказчиков на фрилансе Выполнение различных интерактивных элементов с использованием Jquery плагинов и на чистом JS Ключевые навыки JavaScript SCSS Git Адаптивная верстка Анимации Английский язык Vuex VueJS Кроссбраузерная верстка composition API Grid TypeScript Bash Bootstrap БЭМ REST API Sass WebSocket Axios Vue.js HTML CSS Nuxt Webpack Frontend Figma Pinia ООП ES6 Agile Обо мне Привет! Я фронтенд разработчик с большим увлечением к созданию красивых и удобных интерфейсов. Я люблю превращать идеи в реальность, используя современные технологии и лучшие практики Программирую со средней школы. Решал задачки, ездил на олимпиады. В универе писал простенькие приложения на C# и JS, изучал базовые алгоритмы и структуры данных На третьем курсе познакомился с фронтенд разработкой, начал верстать простенькие лендинги, а моим дипломным проектом было фитнес приложение на Vue в связке с Firebase После выпуска подрабатывал - делал сайты визитки для друзей, выполнял заказы с kwork со знакомыми дизайнерами На последнем месте работы разрабатывал систему внутреннего документооборота и сбора статистики. Реализовывал сложные формы, разрабатывал графики и диаграммы Образование 2021 Международный университет природы, общества и человека "Дубна", Дубна Институт системного анализа и управления Прикладная информатика Знание языков Русский — Родной Английский — B2 — Средне-продвинутый Дополнительная информация Гражданство: Россия Седяхин Денис Frontend Developer (Vue, TypeScript) 23.04.2000 г.р. (24 года) Санкт-Петербург м. Площадь Восстания Контакты: +7-977-3727045 senior.sediahin@yandex.ru https://github.com/sed9xa Резюме от 28.08.2024 (HH.ru)'
  const vacancy =
    'Frontend-разработчик/верстальщик (стажер, junior) от 40000 до 80000 ₽ на руки ИНТЕРВОЛГА — аккредитованная IT-компания. Организация внесена в реестр Минцифры России. Главные компетенции: производство и развитие технологически сложных веб-проектов (интранет-порталы Битрикс24, личные кабинеты, высоконагруженные интернет-магазины), digital-маркетинг и лидогенерация, разработка конфигураций для бизнеса на платформе 1С. Мы работаем с крупным бизнесом. Наши ключевые клиенты: Группа компаний Евраз, АО «Лаборатория Касперского», АО «АльфаБанк", ООО "ПЭК", ООО "ФК Гранд Капитал", ПАО "Левенгук". Мы предоставляем все условия для эффективной работы: удовольствие от работы и хорошая белая зарплата; повышение зарплаты на основе аттестаций, планомерно, раз в полгода; современный и комфортный офис в центре Волгограда; отличное техническое оснащение и возможность апгрейда рабочего места; крутые проекты и известные клиенты; обучение и прокачка скиллов на боевых проектах; ежемесячные неформальные мероприятия внутри компании; программа ДМС и корпоративный психолог. Карьерная лестница прозрачная в соответствии с матрицей компетенций. Вы будете видеть, что нужно изучить для перехода на следующий уровень и повышения Вашей заработной платы. Вакансия в г. Волгоград. Удаленных сотрудников не рассматриваем. Рассматриваем кандидатов с опытом работы от 1 года программистом или frontend-разработчиком. Без опыта рассматриваем студентов последних курсов факультетов математики и информационных технологий. Требования: Высшее ИТ-образование (оконченное или ещё учитесь) Знания HTML, CSS, Twitter Bootstrap Умение делать сетку не только на flexbox и grid, но и на float-элементах Vanilla JS, то есть умение писать на голом JavaScript. Наш стек: Bootstrap + SASS + БЭМ (аналог bem-project-stub на webpack). React, Vue + REST-бекенд. Обязанности: Адаптивная верстка из Figma и PSD-макетов Программирование на JavaScript Вакансия в г. Волгоград. Удаленных сотрудников не рассматриваем. Навыки JavaScript CSS3 Sass HTML5 BEM Bootstrap React Vue Верстка'

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CButton color="primary" onClick={openModal}>
              <CIcon icon={cilUserPlus} className="me-2" />
              New Candidate
            </CButton>
            <CModal onClose={closeModal} visible={newCandidateModalVisible} fullscreen>
              <CModalHeader>
                <CModalTitle>Analyze new candidate</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm onSubmit={onSubmit} id="candidateForm" className="row p-3">
                  <CRow md={{ gutterX: 6 }}>
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CCol md={12}>
                          <CFormLabel>Github</CFormLabel>
                        </CCol>
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput
                          placeholder="Github username"
                          id="leetcode"
                          name="leetcode"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CCol md={12}>
                          <CFormLabel>Leetcode</CFormLabel>
                        </CCol>
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput
                          placeholder="Leetcode username"
                          id="github"
                          name="github"
                          aria-label="Leetcode username"
                          aria-describedby="basic-addon1"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CCol md={12}>
                          <CFormLabel>Stepik</CFormLabel>
                        </CCol>
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput
                          placeholder="Stepik username"
                          id="stepik"
                          name="stepik"
                          aria-label="Stepik username"
                          aria-describedby="basic-addon1"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CCol md={12}>
                          <CFormLabel>Codeforces</CFormLabel>
                        </CCol>
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput
                          placeholder="Stepik username"
                          id="codeforces"
                          name="codeforces"
                          aria-label="Codeforces username"
                          aria-describedby="basic-addon1"
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CRow className="mb-4">
                        <CFormTextarea
                          id="vacancy"
                          name="vacancy"
                          label="Vacancy description"
                          rows={10}
                          value={vacancy}
                          text="Must be at least 100 words long."
                        ></CFormTextarea>
                      </CRow>
                      <CRow>
                        <CFormTextarea
                          id="cv"
                          name="cv"
                          label="Candidate CV"
                          value={cv}
                          rows={10}
                          text="Must be at least 100 words long."
                        ></CFormTextarea>
                      </CRow>
                    </CCol>
                  </CRow>
                </CForm>
              </CModalBody>
              <CModalFooter>
                <CButton onClick={closeModal} color="secondary" disabled={isLoading}>
                  Close
                </CButton>
                <CButton type="submit" form="candidateForm" color="primary" disabled={isLoading}>
                  {isLoading ? (
                    <Fragment>
                      <CSpinner className="me-2" as="span" size="sm" aria-hidden="true" />
                      Loading...
                    </Fragment>
                  ) : (
                    'Analyze Candidate'
                  )}
                </CButton>
              </CModalFooter>
            </CModal>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
