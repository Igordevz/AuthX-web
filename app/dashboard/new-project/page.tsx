import NewProjectForm from "@/src/components/dashboard/new-project";

export default function NewProject() {
  return (
    <div className=" bg-background h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">Start using our authentication API today</p>
          </div>
          <NewProjectForm />
        </div>
      </div>
    </div>
  )
}
