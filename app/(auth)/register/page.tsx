import RegisterForm from "@/src/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">Start using our authentication API today</p>
          </div>
          <RegisterForm />
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-bg-color hover:underline font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
