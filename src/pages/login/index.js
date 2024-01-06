import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function Login() {
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
      console.log(values)
      formik.resetForm()
    }
  })
  return (
    <div class="grid h-[100vh] w-full place-items-center bg-primary">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 px-3 py-2 rounded-md bg-[#fff]">
        <div className="text-[20px] font-semibold">Kirish</div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="username" className="font-500">Usernameni kiriting</label>
          <input
          name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            type="text" placeholder='Username'
            className="rounded-md border-[#616465] border px-2 py-1 placeholder:text-[#616465]"
            id="username" />
            {formik.touched.username && formik.errors.username&& <p class="text-danger">{formik.errors.username}</p>}

        </div>
        <div className="flex flex-col items-start gap-2">
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
            {formik.touched.password && formik.errors.password&& <p class="text-danger">{formik.errors.password}</p>}
        </div>
        <hr />
        <button type="submit" className="px-3 py-1 rounded-md bg-secondary text-[#fff]">Kirish</button>
      </form>
    </div>
  )
}
