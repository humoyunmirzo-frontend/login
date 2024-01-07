import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert,  Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Bounce , Fade, Slide } from 'react-awesome-reveal'
import { adminInformation } from '../../data/admin'
export default function Login() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5, "Minimal belgilar soni 5 ta").max(15, "Maksimal belgilar soni 15 ta").required("Majburiy maydon"),
      password: Yup.string().min(8, "Minimal belgilar soni 8 ta").max(16, "Maksimal belgilar soni 16 ta").required("Majburiy maydon"),
    }),
    onSubmit: (values) => {
      const isAdmin = adminInformation.filter(admin => admin.username === values.username && admin.password === values.password).length>0
      if(isAdmin){
          const access_token = 'token'
          localStorage.setItem('access_token', access_token)
          navigate('/dashboard')
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
            <label htmlFor="username" className="font-500">Usernameni kiriting</label>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              type="text" placeholder='Username'
              className="rounded-md border-[#616465] border px-2 py-1 placeholder:text-[#616465]"
              id="username" />
            {formik.touched.username && formik.errors.username && <p className="text-danger">{formik.errors.username}</p>}

          </Fade>
          <Fade  className="flex flex-col items-start gap-2">
            <label htmlFor="password" className="font-500">Parolni kiriting</label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
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
      <Bounce triggerOnce>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert color="error" sx={{bgcolor:"#f44", color:"white"}} severity="error">Ma'lumotlar xato!</Alert>
      </Snackbar>
      </Bounce>
      </>
  )}
