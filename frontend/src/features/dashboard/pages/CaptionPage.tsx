import { useState } from "react";
import { Sparkles } from "lucide-react";

import useCaption from "../../captions/hooks/useCaption";
import CaptionCard from "../../captions/components/CaptionCard";

export default function CaptionPage() {
  const { captions, loading, generate } = useCaption();

  const [formData, setFormData] = useState({
    media_type: "Reel",
    content_category: "Fitness",
    follower_count: 1000,
    has_call_to_action: true,
    has_trending_audio: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  const generateCaptionHandler = () => {
    generate(formData);
  };

  return (
    <div className="mx-auto w-full max-w-5xl">

      <h1 className="text-4xl font-bold">
        AI Caption Generator
      </h1>

      <p className="mt-2 text-foreground/60">
        Generate engaging Instagram captions using AI.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 space-y-6">

        {/* Media Type */}

        <div>
          <label className="block mb-2">
            Media Type
          </label>

          <select
            name="media_type"
            value={formData.media_type}
            onChange={handleChange}
            className="w-full rounded-lg bg-background border border-border p-3"
          >
            <option>Reel</option>
            <option>Post</option>
            <option>Carousel</option>
            <option>Story</option>
          </select>
        </div>

        {/* Category */}

        <div>
          <label className="block mb-2">
            Content Category
          </label>

          <select
            name="content_category"
            value={formData.content_category}
            onChange={handleChange}
            className="w-full rounded-lg bg-background border border-border p-3"
          >
            <option>Fitness</option>
            <option>Travel</option>
            <option>Food</option>
            <option>Fashion</option>
            <option>Business</option>
            <option>Education</option>
            <option>Lifestyle</option>
          </select>
        </div>

        {/* Followers */}

        <div>
          <label className="block mb-2">
            Followers
          </label>

          <input
            type="number"
            name="follower_count"
            value={formData.follower_count}
            onChange={handleChange}
            className="w-full rounded-lg bg-background border border-border p-3"
          />
        </div>

        {/* Checkboxes */}

        <div className="flex gap-10">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="has_call_to_action"
              checked={formData.has_call_to_action}
              onChange={handleChange}
            />

            Has Call To Action

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="has_trending_audio"
              checked={formData.has_trending_audio}
              onChange={handleChange}
            />

            Trending Audio

          </label>

        </div>

        {/* Button */}

        <button
          onClick={generateCaptionHandler}
          disabled={loading}
          className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3 text-white font-semibold hover:opacity-90 disabled:opacity-60"
        >
          <Sparkles size={20} />

          {loading ? "Generating..." : "Generate Captions"}

        </button>

      </div>

      {/* Loading */}

      {loading && (
        <div className="mt-8 text-center">
          Generating AI captions...
        </div>
      )}

      {/* Results */}

      {captions.length > 0 && (
        <div className="mt-10 space-y-5">

          <h2 className="text-2xl font-bold">
            Generated Captions
          </h2>

          {captions.map((caption, index) => (
            <CaptionCard
              key={index}
              caption={caption}
            />
          ))}

        </div>
      )}

    </div>
  );
}