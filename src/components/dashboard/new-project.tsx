"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { registerAdmin } from "@/context/features/Admin"; // This import seems unused, but I'll keep it as it was in the original file.
import { createNewProject } from "@/context/features/Projects";
import { Textarea } from "@/components/ui/textarea"; // Adicionado import para Textarea

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(), // Adicionado campo de descrição
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function NewProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData, e:any) => {
    setIsSubmitting(true);
    e.preventDefault(); 

    try {
     await createNewProject(data?.name, data?.description || "") // Passando a descrição (string vazia se for undefined)
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Project Information
        </CardTitle>
        <CardDescription className="text-center font-normal">
          All project information will be securely encrypted.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Enter project name"
                {...register("name")}
                className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Novo campo para descrição */}
          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a brief description of your project"
              {...register("description")}
              className="resize-y min-h-[80px]" 
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-color hover:bg-lime-500 text-black font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating project..." : "Create Project"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          {/* update terms */}
          <p className="text-xs text-muted-foreground">
            By creating a project, you agree to our{" "}
            <a href="#" className="text-color hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-color hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
}