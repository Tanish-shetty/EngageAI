import type { PredictionData } from "./PredictionWizard";

import { User, Users, TrendingUp } from "lucide-react";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Button } from "@/components/ui/button";

import WizardCard from "./WizardCard";

interface Props {
  data: PredictionData;
  setData: React.Dispatch<
    React.SetStateAction<PredictionData>
  >;
  onNext: () => void;
}

export default function Step1Account({
  data,
  setData,
  onNext,
}: Props) {
  const accountTypes = [
  { title: "creator", icon: User },
  { title: "brand", icon: TrendingUp },
];

  return (
    <WizardCard
      title="Account Information"
      subtitle="Tell us about your Instagram account."
    >
      <div className="space-y-8">

        {/* Account Type */}

        <div className="space-y-3">

          <Label>
            Account Type
          </Label>

          <div className="grid grid-cols-3 gap-4">

            {accountTypes.map((type) => {
              const Icon = type.icon;

              const selected =
                data.account_type === type.title;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() =>
                    setData((prev) => ({
                      ...prev,
                      account_type: type.title,
                    }))
                  }
                  className={`rounded-2xl border p-5 transition-all duration-300
                    ${
                      selected
                        ? "border-purple-500 bg-purple-500/15 shadow-lg shadow-purple-500/20"
                        : "border-border hover:border-purple-400 hover:bg-purple-500/5"
                    }`}
                >
                  <Icon
                    className={`mx-auto mb-3 h-7 w-7
                      ${
                        selected
                          ? "text-purple-400"
                          : "text-foreground/70"
                      }`}
                  />

                  <p
                    className={`font-medium
                      ${
                        selected
                          ? "text-purple-300"
                          : ""
                      }`}
                  >
                    {type.title}
                  </p>

                </button>
              );
            })}

          </div>

        </div>

        {/* Followers */}

        <div className="space-y-2">

          <Label>
            Followers
          </Label>

          <Input
  type="number"
  placeholder="25000"
  value={data.follower_count || ""}
  onChange={(e) =>
  setData((prev) => ({
    ...prev,
    follower_count:
      e.target.value === ""
        ? 0
        : Number(e.target.value),
  }))
}
/>

        </div>

        {/* Engagement */}

        <div className="space-y-2">

          <Label>
            Engagement Rate (%)
          </Label>

          <Input
  type="number"
  step="0.1"
  placeholder="5.8"
  value={data.engagement_rate || ""}
  onChange={(e) =>
  setData((prev) => ({
    ...prev,
    engagement_rate:
      e.target.value === ""
        ? 0
        : Number(e.target.value),
  }))
}
/>

        </div>

        <div className="flex justify-end">

          <Button
  onClick={onNext}
  disabled={
  data.follower_count <= 0 ||
  data.engagement_rate <= 0
}
>
  Continue →
</Button>

        </div>

      </div>
    </WizardCard>
  );
}