import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/button";

import WizardCard from "./WizardCard";

import type { PredictionData } from "./PredictionWizard";

interface Props {
  data: PredictionData;

  setData: React.Dispatch<
    React.SetStateAction<PredictionData>
  >;

  onBack: () => void;

  onPredict: () => void;

  loading: boolean;
}

export default function Step3History({
  data,
  setData,
  onBack,
  onPredict,
  loading,
}: Props) {
  return (
    <WizardCard
      title="Historical Performance"
      subtitle="Provide your recent account statistics."
    >
      <div className="space-y-8">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <Label>
              Average Likes (Last 10 Posts)
            </Label>

            <Input
              type="number"
              value={data.avg_likes_last_10_posts || ""}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  avg_likes_last_10_posts: Number(
                    e.target.value
                  ),
                }))
              }
            />
          </div>

          <div>
            <Label>
              Average Comments (Last 10 Posts)
            </Label>

            <Input
              type="number"
              value={data.avg_comments_last_10_posts || ""}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  avg_comments_last_10_posts: Number(
                    e.target.value
                  ),
                }))
              }
            />
          </div>

          <div>
            <Label>
              Followers Gained
            </Label>

            <Input
              type="number"
              value={data.followers_gained || ""}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  followers_gained: Number(
                    e.target.value
                  ),
                }))
              }
            />
          </div>

          <div>
            <Label>
              Total Posts
            </Label>

            <Input
              type="number"
              value={data.total_posts_count || ""}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  total_posts_count: Number(
                    e.target.value
                  ),
                }))
              }
            />
          </div>

          <div>
            <Label>
              Average Engagement (%)
            </Label>

            <Input
              type="number"
              step="0.1"
              value={
                data.avg_engagement_last_10_posts || ""
              }
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  avg_engagement_last_10_posts: Number(
                    e.target.value
                  ),
                }))
              }
            />
          </div>

          <div>
            <Label>
              Posting Frequency
            </Label>

            <Select
              value={data.posting_frequency}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  posting_frequency:
                    e.target.value,
                }))
              }
            >
              <option value="">
                Select
              </option>

              <option>Daily</option>

              <option>3-5/week</option>

              <option>Weekly</option>

              <option>Monthly</option>
            </Select>
          </div>

        </div>

        <div>

          <Label>
            Last Post Date
          </Label>

          <Input
            type="date"
            value={data.last_post_date}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                last_post_date:
                  e.target.value,
              }))
            }
          />

        </div>

        <div className="flex justify-between">

          <Button
            variant="outline"
            onClick={onBack}
          >
            ← Back
          </Button>

          <Button
            onClick={onPredict}
            disabled={loading}
          >
            {loading
              ? "Predicting..."
              : "Predict 🚀"}
          </Button>

        </div>

      </div>
    </WizardCard>
  );
}