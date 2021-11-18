import Header from "./contextAPI/header";
import List from "./contextAPI/list";
import React from 'react'
import {DataProvider} from '../context/homePgContext'

function Homepage() {
    return (
        <DataProvider>
            <>
                <Header/>
                <List/>
            </>
        </DataProvider>
    )
}

export default Homepage

