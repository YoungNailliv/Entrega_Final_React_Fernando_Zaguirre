import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from '../layout/Layout'

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={ <Layout/> }>
                {
                routes.map( ({id, path, Element}) => {
                    return(
                        <Route path={path} element={<Element/>} key={id}/>
                    )})
                }
            </Route>
        </Routes>
    )
}
