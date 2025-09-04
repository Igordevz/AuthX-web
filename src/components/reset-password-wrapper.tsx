'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ResetPasswordForm } from './reset-password-form'

function SearchParamsContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  
  return <ResetPasswordForm email={email} />
}

export function ResetPasswordWrapper() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <SearchParamsContent />
      </Suspense>
    </div>
  )
}
