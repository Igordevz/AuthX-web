import { ForgotPasswordForm } from "@/src/components/forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Forgot Your Password?</h1>
          <p className="text-muted-foreground mt-2">
            Enter your email and we'll send you a code to reset your password
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
