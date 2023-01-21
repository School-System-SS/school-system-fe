'use client';
import React from 'react'
import TableOfTeachers from './TableOfTeachers'
import AdminHeader from "../admin/adminHeader";
export default function page() {
  return (
    <>
      <AdminHeader />
      <TableOfTeachers />
    </>
  )
}
