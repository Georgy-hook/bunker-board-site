import bunkerLogo from "figma:asset/af3b0ac35568f0c21ec86e6301202642d53c9127.png";

export function CreatePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background: "radial-gradient(circle at center, #FDAC04 0%, #E95600 100%)",
        fontFamily: '"Classic Comic", "Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive'
      }}
    >
      <div className="w-full max-w-xl bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-10 sm:px-10 sm:py-14 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={bunkerLogo}
            alt="Bunker Board Logo"
            className="h-24 w-auto sm:h-28 drop-shadow-xl"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Creating the Session
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          To create a session, tap Open App in your browser banner. If nothing appears, switch to Safari or refresh the page.
        </p>
      </div>
    </div>
  );
}

export default CreatePage;
