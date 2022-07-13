import React from 'react'

import AdminLayout from '../components/AdminLayout'
export default function Dashboard() {
  return (
    <div>dashboard</div>

  )
}


Dashboard.getLayout = function getLayout(page){
  return <AdminLayout>{page}</AdminLayout>
}