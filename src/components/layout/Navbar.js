import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
function Navbar(){
    return <nav className={styles.Navbar}>
        <Container>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to='/'><img src={logo} alt='Costs'/></Link>
            </li>
            <li className={styles.item}>
              <Link to='/company'>Company</Link>
            </li>
            <li className={styles.item}>
              <Link to='/Projects'>Projects</Link>
            </li>
            <li className={styles.item}>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className={styles.item}>
              <Link to='/newproject'>NewProject</Link>
            </li>
          </ul>
        </Container>

      </nav>
    
}export default Navbar