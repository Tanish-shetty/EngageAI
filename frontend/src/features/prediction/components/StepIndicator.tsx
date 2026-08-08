interface Props {
  currentStep: number;
}

export default function StepIndicator({
  currentStep,
}: Props) {
  const steps = [
    "Account",
    "Post",
    "History",
  ];

  return (
    <div className="mb-10">

      <div className="flex justify-between">

        {steps.map((step, index) => {

          const active =
            currentStep >= index + 1;

          return (
            <div
              key={step}
              className="flex flex-col items-center flex-1"
            >

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all
                ${
                  active
                    ? "border-purple-500 bg-purple-500 text-white"
                    : "border-border bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>

              <p
                className={`mt-2 text-sm ${
                  active
                    ? "text-white"
                    : "text-muted-foreground"
                }`}
              >
                {step}
              </p>

            </div>
          );
        })}

      </div>

      <div className="mt-5 h-2 rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{
            width: `${(currentStep / 3) * 100}%`,
          }}
        />

      </div>

    </div>
  );
}