import { ResetPasswordForm } from "@/src/components/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Reset Password</h1>
          <p className="text-muted-foreground mt-2">Enter the code sent to your email and your new password</p>
        </div>
        <ResetPasswordForm/>
      </div>
    </div>
  )
} 
