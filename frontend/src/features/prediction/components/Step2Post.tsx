import {
  Calendar,
  Clapperboard,
  Film,
  Image,
  Images,
} from "lucide-react";

import CardOption from "@/components/ui/CardOption";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import CharacterCounter from "@/components/ui/CharacterCounter";
import { Button } from "@/components/ui/button";

import WizardCard from "./WizardCard";
import type { PredictionData } from "./PredictionWizard";

interface Props {
  data: PredictionData;
  setData: React.Dispatch<
    React.SetStateAction<PredictionData>
  >;
  onBack: () => void;
  onNext: () => void;
}

export default function Step2Post({
  data,
  setData,
  onBack,
  onNext,
}: Props) {
  const mediaTypes = [
    {
      title: "Image",
      icon: Image,
    },
    {
      title: "Reel",
      icon: Clapperboard,
    },
    {
      title: "Carousel",
      icon: Images,
    },
    {
      title: "Video",
      icon: Film,
    },
  ];

  return (
    <WizardCard
      title="Post Details"
      subtitle="Tell us about the content you're planning to publish."
    >
      <div className="space-y-8">

        {/* Caption */}

        <div>

          <Label>
            Caption
          </Label>

          <Textarea
            placeholder="Write your Instagram caption..."
            value={data.caption}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                caption: e.target.value,
              }))
            }
          />

          <CharacterCounter
            current={data.caption.length}
            max={2200}
          />

        </div>

        {/* Media Type */}

        <div>

          <Label>
            Media Type
          </Label>

          <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4">

            {mediaTypes.map((item) => (
              <CardOption
                key={item.title}
                title={item.title}
                icon={item.icon}
                selected={
                  data.media_type === item.title
                }
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    media_type: item.title,
                  }))
                }
              />
            ))}

          </div>

        </div>

        {/* Category + Traffic */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <Label>
              Content Category
            </Label>

            <Select
              value={data.content_category}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  content_category: e.target.value,
                }))
              }
            >
              <option value="">
                Select Category
              </option>

              <option>Travel</option>
              <option>Fitness</option>
              <option>Food</option>
              <option>Fashion</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Lifestyle</option>
              <option>Entertainment</option>

            </Select>

          </div>

          <div>

            <Label>
              Traffic Source
            </Label>

            <Select
              value={data.traffic_source}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  traffic_source: e.target.value,
                }))
              }
            >
              <option value="">
                Select Source
              </option>

              <option>Explore</option>
              <option>Home Feed</option>
              <option>Profile</option>
              <option>Hashtags</option>
              <option>Suggested</option>

            </Select>

          </div>

        </div>

        {/* CTA */}

        <Checkbox
          checked={data.has_call_to_action}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              has_call_to_action: e.target.checked,
            }))
          }
        />

        {/* Date & Time */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <Label>
              Post Date
            </Label>

            <input
              type="date"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
              value={data.post_date}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  post_date: e.target.value,
                }))
              }
            />

          </div>

          <div>

            <Label>
              Post Time
            </Label>

            <input
              type="time"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
              value={data.post_time}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  post_time: e.target.value,
                }))
              }
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-between">

          <Button
            variant="outline"
            onClick={onBack}
          >
            ← Back
          </Button>

          <Button
            onClick={onNext}
          >
            Continue →
          </Button>

        </div>

      </div>
    </WizardCard>
  );
}