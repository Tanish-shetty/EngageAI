import { useState } from "react";
import { Hash } from "lucide-react";

import useHashtags from "../hooks/useHashtags";
import HashtagCard from "../components/HashtagCard";

export default function HashtagPage() {

  const {

    hashtags,

    loading,

    generate,

  } = useHashtags();

  const [formData, setFormData] = useState({

    media_type: "Reel",

    content_category: "Fitness",

    follower_count: 1000,

    include_trending: true,

  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {

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

  }

  return (

    <div className="mx-auto w-full max-w-5xl">

      <h1 className="text-4xl font-bold">
        AI Hashtag Generator
      </h1>

      <p className="mt-2 text-foreground/60">
        Generate optimized Instagram hashtags using AI.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 space-y-6">

        <div>

          <label className="block mb-2">
            Media Type
          </label>

          <select
            name="media_type"
            value={formData.media_type}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background p-3"
          >

            <option>Reel</option>

            <option>Post</option>

            <option>Carousel</option>

            <option>Story</option>

          </select>

        </div>

        <div>

          <label className="block mb-2">
            Category
          </label>

          <select
            name="content_category"
            value={formData.content_category}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background p-3"
          >

            <option>Fitness</option>

            <option>Travel</option>

            <option>Food</option>

            <option>Business</option>

            <option>Fashion</option>

            <option>Education</option>

            <option>Lifestyle</option>

          </select>

        </div>

        <div>

          <label className="block mb-2">
            Followers
          </label>

          <input
            type="number"
            name="follower_count"
            value={formData.follower_count}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background p-3"
          />

        </div>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            name="include_trending"
            checked={formData.include_trending}
            onChange={handleChange}
          />

          Include Trending Hashtags

        </label>

        <button
          onClick={() => generate(formData)}
          disabled={loading}
          className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3 font-semibold text-white"
        >

          <Hash size={20} />

          {loading
            ? "Generating..."
            : "Generate Hashtags"}

        </button>

      </div>

      {hashtags.length > 0 && (

        <div className="mt-8">

          <HashtagCard hashtags={hashtags} />

        </div>

      )}

    </div>

  );

}