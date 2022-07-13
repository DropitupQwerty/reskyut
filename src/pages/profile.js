import React from 'react'

import AdminLayout from '../components/AdminLayout'
export default function users() {
  return (
    <div>profile page</div>
  )
}
users.getLayout = function getLayout(page){
  return <AdminLayout>{page}</AdminLayout>
}