import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert,  Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Bounce , Fade, Slide } from 'react-awesome-reveal'
import {  adminPasswords } from '../../data/admin'
export default function Login() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(5, "Minimal belgilar soni 5 ta").max(16, "Maksimal belgilar soni 16 ta").required("Majburiy maydon"),
    }),
    onSubmit: (values) => {
      const isAdmin = adminPasswords.filter(password => password === values.password).length>0
      if(isAdmin){
          const access_token = 'token'
          localStorage.setItem('access_token', access_token)
          navigate('/')
      } else setOpen(true)
             formik.resetForm()
    }
  })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
    <div className="flex flex-col justify-center h-[100vh] w-full items-center bg-primary">
      <Slide direction="left" triggerOnce->
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 px-3 py-2 rounded-md bg-[#fff]">
          <Fade  className="text-[20px] font-semibold">Kirish</Fade>
          <Fade  className="flex flex-col items-start gap-2">
            <label htmlFor="password" className="font-500">Parolni kiriting</label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="text"
              placeholder='Parol'
              className="rounded-md border-[#616465] border px-2 py-1 placeholder:text-[#616465]"
              id="password" />
            {formik.touched.password && formik.errors.password && <p className="text-danger">{formik.errors.password}</p>}
          </Fade>
          <hr />
          <Fade  className='w-full'>
          <button type="submit" className="px-3 py-1 w-full rounded-md bg-secondary text-[#fff]">Kirish</button>
      </Fade>
        </form>
      </Slide>
      </div>
      <Bounce triggerOnce >
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert color="error" sx={{bgcolor:"#f44", color:"white"}} severity="error">Parol xato!</Alert>
      </Snackbar>
      </Bounce>
      </>
  )}
