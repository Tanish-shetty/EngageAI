import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Input from "./Input";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput({
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">

      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className="pr-12"
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-purple-400"
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>

    </div>
  );
}