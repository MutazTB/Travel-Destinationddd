import React from 'react';
import MyHeader from './components/header/Header'
import MyFooter from './components/footer/Footer'
import MyTours from'./components/tours/Tours'
import data from './data/data.json'

export default function App() {
  return (
    <>
   <MyHeader />
   <MyTours tours={data}/>
   <MyFooter />
    </>
  )
}