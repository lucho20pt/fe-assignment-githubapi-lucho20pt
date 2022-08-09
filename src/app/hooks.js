// import {
//   useDispatch as useAppDispatch,
//   useSelector as useAppSelector
// } from 'react-redux'

// export const useDispatch = () => useAppDispatch()
// export const useSelector = useAppSelector

import { useDispatch, useSelector } from 'react-redux'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
