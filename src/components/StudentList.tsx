import React from 'react'
import './StudentList.scss'
import {Link} from 'react-router-dom'
import Button from './Button'

const StudentList = (): any => {
  return (

    <section className="students">
      <div className="container">
        <div className="content">
          <div className="students-top">
            <h1 className="heading heading--bold">Студенты</h1>
            <Link className="link" to='/'>
              <Button/>
            </Link>
          </div>
          <form className="students-form">
            <div className="students-form__left">
              <input
                className="students-form__button" 
                type="button"  
                value=" " 
              />
              <input 
                className="students-form__name text"
                type="textarea" 
                placeholder="Поиск по имени"
              />
            </div>
            <select className="select text" id="sort">
              <option value="name">Имя</option>
              <option value="age">Возраст</option>
              <option value="beauty">Красота</option>
            </select>
          </form>
        </div>
      </div>
    </section>

  )
} 

export default StudentList