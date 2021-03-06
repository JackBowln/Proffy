import React from 'react'
import { Link } from 'react-router-dom'

import TeacherItem from '../../components/TeacherItem/'
import PageHeader from '../../components/PageHeader'

import './styles.css'
function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
          <PageHeader title='Estes são os proffys disponíveis'>
              <form action="" id="search-teachers">
                  <div className="input-block">
                      <label htmlFor="subjects">Matéria</label>
                    <input type="text" id="subject"/>
                    </div>
                  <div className="input-block">
                      <label htmlFor="week-days">Dia da semana</label>
                    <input type="text" id="week-days"/>
                    </div>
                  <div className="input-block">
                      <label htmlFor="time">Hora</label>
                    <input type="text" id="time"/>
                    </div>
              </form>
          </PageHeader>
          <main>
             <TeacherItem></TeacherItem>
             <TeacherItem></TeacherItem>
             <TeacherItem></TeacherItem>
             <TeacherItem></TeacherItem>
             <TeacherItem></TeacherItem>
             <TeacherItem></TeacherItem>
          </main>
        </div> 
        )
}

export default TeacherList