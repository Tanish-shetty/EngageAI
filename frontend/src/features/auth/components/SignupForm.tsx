import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";

import { signup } from "@/services/auth/signup";

import {
  signupSchema,
  type SignupFormData,
} from "../schema";

export default function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    const toastId = toast.loading("Creating your account...");

    try {
      await signup({
        full_name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.dismiss(toastId);

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error: any) {
      toast.dismiss(toastId);

      let message = "Unable to create account.";

      if (error?.response?.status === 400) {
        message =
          error?.response?.data?.detail ||
          "Email is already registered.";
      } else if (error?.response?.data?.detail) {
        message = error.response.data.detail;
      }

      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name
        </Label>

        <Input
          id="name"
          placeholder="Enter your full name"
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>

        <PasswordInput
          id="password"
          placeholder="Create a password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          Confirm Password
        </Label>

        <PasswordInput
          id="confirmPassword"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Creating Account...
          </div>
        ) : (
          "Sign Up"
        )}
      </Button>

      {/* Footer */}
      <p className="text-center text-sm text-foreground/70">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          Login
        </Link>
      </p>
    </form>
  );
}