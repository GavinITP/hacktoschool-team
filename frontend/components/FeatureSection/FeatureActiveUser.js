export const FeatureActiveUser = () => {
  return (
    <>
      <div className="flex sm:justify-center">
        <div>
          {/* Change this later */}
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z" />
          </svg>
        </div>
        <p className="text-4xl font-bold">600</p>
      </div>
      <p className="text-stone-500 sm:text-center text-base lg:text-sm font-semibold tracking-tight">
        Active Users
      </p>
    </>
  );
};
