import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases, casesPerOneMillion, testsPerOneMillion } = data

    const getValue = (value) => value ? value : < Skeleton variant = "text"
    width = { 182 }
    height = { 60 }
    />

    return ( <
        Grid container spacing = { 4 } >
        <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(cases) }
        label = "Total de casos"
        color = "#5d78ff" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(todayDeaths) }
        label = "Óbitos hoje"
        color = "#000" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(todayCases) }
        label = "Casos hoje"
        color = "#D2691E" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(deaths) }
        label = "Total de mortos"
        color = "#8B008B" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(recovered) }
        label = "Total de recuperados"
        color = "#67C887" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(casesPerOneMillion) }
        label = "Casos por Milhão"
        color = "#F7B829" / >
        <
        /Grid> <
        Grid item xs = { 12 }
        md = { 3 } >
        <
        Card value = { getValue(testsPerOneMillion) }
        label = "Total de Testes por Milhão"
        color = "#FF0000" / >
        <
        /Grid> < /
        Grid >
    )
}

export default memo(Board)