import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import PasswordInput from "@/components/ui/PasswordInput";

import useAuth from "@/hooks/useAuth";

import {
  loginSchema,
  type LoginFormData,
} from "../schema";

export default function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const toastId = toast.loading("Signing in...");

    try {
      await login({
        email: data.email,
        password: data.password,
      });

      toast.dismiss(toastId);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error: any) {
      toast.dismiss(toastId);

      let message = "Login failed.";

      if (error?.response?.status === 401) {
        message = "Invalid email or password.";
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
        <div className="flex items-center justify-between">
          <Label htmlFor="password">
            Password
          </Label>

          <Link
            to="/forgot-password"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <PasswordInput
          id="password"
          placeholder="Enter your password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-400">
            {errors.password.message}
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
            Signing In...
          </div>
        ) : (
          "Login"
        )}
      </Button>

      {/* Footer */}
      <p className="text-center text-sm text-foreground/70">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}