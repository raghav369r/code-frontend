import React from "react";
function ContestPage() {
  const strTime = new Date("2024-07-12");
  const endTime = new Date("2024-07-15");
  const user = true;
  const registered = true;
  return (
    <>
      <div className="main w-full flex justify-center items-center text-center bg-black">
        <div>
          <h1 className="text-3xl font-semibold text-white">Contest Name</h1>
          <h1 className="text-white my-4">{`${strTime} IST to ${endTime} IST`}</h1>
          {user ? (
            registered ? (
              strTime < Date.now() ? (
                <button className="btn bg-green-500 text-white">Start</button>
              ) : (
                <button className="btn bg-green-500 text-white">
                  Starting soon
                </button>
              )
            ) : (
              <button className="btn bg-green-500 text-white">Register</button>
            )
          ) : (
            <button className="btn bg-green-500 text-white">Sign Up</button>
          )}
        </div>
      </div>
      <div className="my-12 mx-5 p-2 md:p-9 bg-black">
        <h1 className="text-center text-4xl mb-5 font-medium">About</h1>
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam
          ipsa debitis cumque excepturi fugiat ea nulla nesciunt expedita quasi
          odit, dignissimos, ullam magnam autem consequuntur soluta modi!
          Distinctio, sapiente.
        </p>
      </div>
    </>
  );
}

export default ContestPage;
