import React from "react";

const Description = ({ data, loading }) => {
  const { problem } = data || {};

  return (
    <div className="p-3 m-2 pr-0 border rounded-xl overflow-x-hidden h-full mr-0 flex flex-col">
      {loading && <h1 className="text-center my-auto">Loading...</h1>}
      <h1 className="py-2 text-xl font-semibold h-fit">{problem?.title}</h1>
      <hr />
      <div className="h-full overflow-y-scroll">
        <p className="py-4">{problem?.description}</p>
        {problem?.examples?.map((ex, ind) => (
          <>
            <h1 className="py-2 font-semibold">Example {ind + 1}</h1>
            <Example example={ex} key={ind} />
          </>
        ))}
      </div>
    </div>
  );
};

const Example = ({ example }) => {
  const { input, output, explanation } = example || {};
  return (
    <div className="bg-neutral-100 p-3 m-2 rounded">
      <h1 className="font-semibold">input</h1>
      <h2 className="p-1">{input}</h2>
      <h1 className="font-semibold">output</h1>
      <h2 className="p-1">{output}</h2>
      {explanation && <h1 className="font-semibold">explanation</h1>}
      <h2 className="p-1">{explanation}</h2>
    </div>
  );
};

export default Description;
