import SignupForm from "../components/SignupForm";

function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Signup to get started
        </p>

        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;